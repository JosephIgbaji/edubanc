import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req) {
    try {
        cookies().set('user', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production',
            maxAge: 0, // zero time
            path: '/',
        });

        return NextResponse.json({ status: 'success', message: 'Logout successful' }, { status: 200 });
    } catch (error) {
        if (error.name == 'JsonWebTokenError') {
            return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
        } else {
            return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
        }
    }
}