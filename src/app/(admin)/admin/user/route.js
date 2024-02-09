import connectDB from "@/db";
import { User } from "@/models";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function GET(req) {
    try {
        await connectDB();

        // for (let model in mongoose.models) delete mongoose.models[model];

        const token = cookies().get('user')?.value;
        if (!token) return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });

        const decoded = jwt.verify(token, process.env.COOKIE_SECRET);

        const q = await User.find({ _id: decoded.payload.id }, { email: 1 });
        if (!q) return NextResponse.json({ status: 'error', message: 'An error occured' }, { status: 500 });
        if (q.length != 1) return NextResponse.json({ status: 'error', message: 'Invalid credential' }, { status: 403 });

        return NextResponse.json({ status: 'success', message: 'Login successful', data: { email: q[0].email } }, { status: 200 });
    } catch (error) {
        if (error.name == 'JsonWebTokenError') {
            return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        } else {
            return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
        }
    }
}