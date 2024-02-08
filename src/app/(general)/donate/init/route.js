import { NextResponse } from "next/server";

export async function POST(request, context) {
    const body = await request.json();
    const { email, amount } = body;
    if (!email || !amount) return NextResponse.json({ status: 'error', message: 'Missing parameter' }, { status: 400 });
    const resp = await fetch("https://api.paystack.co/transaction/initialize", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization':
                `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        body: JSON.stringify({
            email,
            amount: amount * 100,
            callback_url: process.env.BASE_URL,
        }),
    });
    const json = await resp.json();
    if (resp.status == 200 && json?.data?.authorization_url) return NextResponse.json({
        status: 'success',
        message: json.message,
        data: { authorization_url: json?.data?.authorization_url }
    }, { status: 200 });
    return NextResponse.json({ status: 'error', message: 'Something went wrong' }, { status: 500 });
}