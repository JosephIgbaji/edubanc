import connectDB from "@/db";
import { Designations } from "@/models";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function GET(req) {
    try {
        await connectDB();

        const token = cookies().get('user')?.value;
        if (!token) return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        jwt.verify(token, process.env.COOKIE_SECRET);

        const q = await Designations.find();

        return NextResponse.json({ status: 'success', message: 'Listed', data: q ?? [] }, { status: 200 });
    } catch (error) {
        if (error.name == 'JsonWebTokenError') {
            return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        } else {
            return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
        }
    }
}