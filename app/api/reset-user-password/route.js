import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { db } from "@/lib/db"

export async function POST(req) {
    const request = await req.json();
    console.log("Api:", request)

    if (!request.userId || !request.prevPassword || !request.newPassword) return NextResponse.json(
        { error: "Missing required fields!" },
        { status: 400 }
    )

    const [[pass]] = await db.query("SELECT pass_hash FROM users WHERE user_id = ?", [request.userId])

    if (!pass) return NextResponse.json(
        { error: "User Not Found!" },
        { status: 401 }
    )

    const passMatched = await bcrypt.compare(request.prevPassword, pass.pass_hash)

    if (!passMatched) return NextResponse.json(
        { error: "Incorrect Password!" },
        { status: 500 }
    )

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(request.newPassword, saltRounds)

    const [rows] = await db.query("UPDATE users SET pass_hash = ? WHERE user_id = ?", [hashedPassword, request.userId])

    const query = `UPDATE users (WHERE user_id = ? AND pass_hash = ?)SET pass_hash = ?;`

    const data = {
        status: 200,
        query: query,
        rows: rows,
    };

    return NextResponse.json(data);
}
