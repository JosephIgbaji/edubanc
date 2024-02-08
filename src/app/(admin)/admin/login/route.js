import connectDB from "@/db";
import { User } from "@/models";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";

export async function POST(req) {
    await connectDB();

    // for (let model in mongoose.models) delete mongoose.models[model]

    const body = await req.json();
    const { email, pwd } = body;
    if (!email || !pwd) return NextResponse.json({ status: 'error', message: 'Missing parameter' }, { status: 400 });

    // const password = bcrypt.hashSync(pwd, parseInt(process.env.PWD_HASH_LENGTH));

    const q = await User.find({ email });
    if (!q) return NextResponse.json({ status: 'error', message: 'An error occured' }, { status: 500 });
    if (q.length != 1) return NextResponse.json({ status: 'error', message: 'Invalid email or password' }, { status: 400 });

    if (!bcrypt.compareSync(pwd, q[0]?.password)) return NextResponse.json({ status: 'error', message: 'Incorrect email or password' }, { status: 400 });

    const token = jwt.sign({ payload: { id: q[0]._id } }, process.env.COOKIE_SECRET);
    cookies().set('user', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV == 'production',
        maxAge: 60 * 60 * 24 * 1, // One day
        path: '/',
    });

    return NextResponse.json({ status: 'success', message: 'Login successful' }, { status: 200 });
}