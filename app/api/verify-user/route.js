import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { db } from "@/lib/db"

export async function POST(req) {
    const request = await req.json();
    console.log("Api:", request)

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(request.password, saltRounds)

    const [[pass]] = await db.query("SELECT pass_hash FROM users WHERE (email = ? OR username = ?)",[request.emailUsername, request.emailUsername])

    if(!pass) return NextResponse.json({
        status: 401,
        error: "Username or Email Invalid",
    })

    const passMatched = await bcrypt.compare(request.password, pass.pass_hash)

    if(!passMatched) return NextResponse.json({
        status: 500,
        error: "Password Doesn't Match"
    })

    const [[rows]] = await db.query("SELECT user_id FROM users WHERE (username = ? OR email = ?)", [request.emailUsername, request.emailUsername])
    
    const query = `SELECT user_id FROM users WHERE ((username = ${request.emailUsername} || email = ${request.emailUsername}) && pass_hash = ${hashedPassword});`

    const data = {
        status: 200,
        query: query,
        rows: rows,
    };

    return NextResponse.json(data);
}
