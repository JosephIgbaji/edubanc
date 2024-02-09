import connectDB from "@/db";
import { Blog } from "@/models";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

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