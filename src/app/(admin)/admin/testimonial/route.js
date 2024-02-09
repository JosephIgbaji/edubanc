import connectDB from "@/db";
import { Testimonial, User } from "@/models";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function POST(req) {
    try {
        await connectDB();

        const token = cookies().get('user')?.value;
        if (!token) return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        jwt.verify(token, process.env.COOKIE_SECRET);

        const body = await req.json();
        const { name, designation, testimonial } = body;
        if (!name || !designation || !testimonial) return NextResponse.json({ status: 'error', message: 'Missing parameter' }, { status: 400 });

        const q = await Testimonial.create({ name, designation, testimonial });

        return NextResponse.json({ status: 'success', message: 'Listed', data: q ?? [] }, { status: 200 });
    } catch (error) {
        if (error.name == 'JsonWebTokenError') {
            return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        } else {
            return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
        }
    }
}

export async function GET(req) {
    try {
        await connectDB();

        const q = await Testimonial.aggregate([
            {
                $lookup: {
                    from: 'designations',
                    localField: 'designation',
                    foreignField: '_id',
                    as: 'designation',
                }
            },
            {
                $addFields: {
                    id: '$_id',
                    designation: { $arrayElemAt: ["$designation", 0] },
                },
            },
            {
                $addFields: { designation: '$designation.name' }
            },
            {
                $project: { _id: 0, updatedAt: 0, __v: 0 }
            }
        ]);

        return NextResponse.json({ status: 'success', message: 'Listed', data: q ?? [] }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
    }
}