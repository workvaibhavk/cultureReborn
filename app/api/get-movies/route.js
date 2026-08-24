import { NextResponse } from 'next/server';
import { db } from "@/lib/db"

export async function GET() {
    const [rows] = await db.query("SELECT * FROM movies");
    
    const query = `SELECT * FROM movies;`

    const data = {
        status: 200,
        query: query,
        rows: rows,
    };

    return NextResponse.json(data);
}
