import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { db, mode } from "@/lib/db"

export async function POST(req) {
    const request = await req.json();
    console.log("Api:", request)

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(request.password, saltRounds)

    const [[pass]] = await db.query("SELECT pass_hash FROM users WHERE (email = ? OR username = ?)",[request.emailUsername, request.emailUsername])

    if(!(pass)) return NextResponse.json({
        status: 500,
        error: "Username or Email Invalid"
    })

    if(!bcrypt.compare(request.password, pass.pass_hash)) return NextResponse.json({
        status: 500,
        error: "Password Doesn't Match"
    })

    const [[rows]] = await db.query("SELECT user_id FROM users WHERE (username = ? OR email = ?)", [request.emailUsername, request.emailUsername])
    
    const query = `SELECT user_id FROM users WHERE ((username = ${request.emailUsername} || email = ${request.emailUsername}) && pass_hash = ${hashedPassword});`

    const data = {
        status: 200,
        request: request,
        query: query,
        rows: rows,
        // hashBool: bcrypt.compare(request.password, user.pass_hash) ? "yess" : "no"
        pass: pass
    };

    return NextResponse.json(data);
}
