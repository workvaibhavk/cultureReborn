import { NextResponse } from 'next/server';
import { db } from "@/lib/db"

export async function GET(req) {
    const searchParam = new URL(req.url);
    const userId = searchParam.searchParams.get("userId")
    const [[rows]] = await db.query("SELECT * FROM users WHERE user_id = ?", [userId]);
    
    const query = `SELECT * FROM users WHERE user_id=?;`

    const data = {
        status: 200,
        query: query,
        rows: rows,
        req: userId
    };

    return NextResponse.json(data);
}
