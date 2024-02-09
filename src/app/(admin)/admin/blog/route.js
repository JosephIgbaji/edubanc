import connectDB from "@/db";
import { Blog, Testimonial, User } from "@/models";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function POST(req) {
    try {
        await connectDB();

        const token = cookies().get('user')?.value;
        if (!token) return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        jwt.verify(token, process.env.COOKIE_SECRET);

        const json = await req.json();
        const { title, category, readDuration, body, cover } = json;
        if (!title || !category || !body) return NextResponse.json({ status: 'error', message: 'Missing parameter' }, { status: 400 });

        const slug = title.replaceAll(' ', '-').toLowerCase();

        const q = await Blog.create({ title, slug, category, readDuration, body, cover });

        return NextResponse.json({ status: 'success', message: 'Listed', data: q ?? [] }, { status: 200 });
    } catch (error) {
        if (error.name == 'JsonWebTokenError') {
            return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        } else {
            console.log(error.message);
            return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
        }
    }
}

export async function GET(req) {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        const limit = searchParams.get('limit');

        const arr = [
            {
                $lookup: {
                    from: 'blog_categories',
                    localField: 'category',
                    foreignField: '_id',
                    as: 'category',
                }
            },
            {
                $addFields: {
                    id: '$_id',
                    category: { $arrayElemAt: ["$category", 0] },
                },
            },
            {
                $addFields: { category: '$category.name' }
            },
            {
                $project: { _id: 0, updatedAt: 0, __v: 0 }
            },
        ];
        if (limit) {
            arr.push({
                $limit: parseInt(limit)
            });
        }
        const q = await Blog.aggregate(arr);

        return NextResponse.json({ status: 'success', message: 'Listed', data: q ?? [] }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
    }
}