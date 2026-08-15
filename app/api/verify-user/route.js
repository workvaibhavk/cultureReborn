import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { db, mode } from "@/lib/db"

export async function POST(req) {
    const request = await req.json();
    console.log("Api:", request)

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(request.password, saltRounds)
    if (mode == "sql") {
        const [rows] = db.query("SELECT user_id FROM users WHERE ((username = ? || email = ?) && pass_hash = ?)", [request.firstname, request.lastname, request.username, request.email, hashedPassword, request.dob, request.role])
        sessionStorage.setItem('userId', user_id)
    }

    const query = `SELECT user_id FROM users WHERE ((username = ${request.emailUsername} || email = ${request.emailUsername}) && pass_hash = ${hashedPassword});`

    const data = {
        status: 200,
        request: request,
        query: query,
        rows: mode == "sql" ? mode : null
    };

    return NextResponse.json(data);
}
