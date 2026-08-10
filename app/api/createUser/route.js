import { NextResponse } from 'next/server';

export async function POST(req) {

    const request = await req.json();
    console.log("Api:", request)

  const data = {
    status: "success",
    request: request,
    message: "This endpoint was prerendered at build time.",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(request);
}
