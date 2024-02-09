import connectDB from "@/db";
import { Blog } from "@/models";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function GET(req, ctx) {
    try {
        await connectDB();

        const { id } = ctx.params;

        const q = await Blog.aggregate([
            {
                $match: { slug: id }
            },
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
            }
        ]);

        return NextResponse.json({ status: 'success', message: 'Fetched', data: q[0] ?? {} }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(req, ctx) {
    try {
        await connectDB();

        const token = cookies().get('user')?.value;
        if (!token) return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        jwt.verify(token, process.env.COOKIE_SECRET);

        const q = await Blog.deleteOne({ _id: ctx.params.id });
        if (!q) return NextResponse.json({ status: 'error', message: 'An error occured' }, { status: 500 });

        return NextResponse.json({ status: 'success', message: 'Item deleted' }, { status: 200 });
    } catch (error) {
        if (error.name == 'JsonWebTokenError') {
            return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        } else {
            return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
        }
    }
}