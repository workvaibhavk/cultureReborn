import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import { db, mode } from "@/lib/db"

export async function POST(req) {
    const request = await req.json();
    console.log("Api:", request)

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(request.password, saltRounds)
if (mode == "sql"){
      const [rows] = await db.query("INSERT INTO users(first_name, last_name, username, email, pass_hash, dob, role) VALUES (?,?,?,?,?,?,?)",[request.firstname, request.lastname, request.username, request.email, hashedPassword, request.dob, request.role])
}
const query = `INSERT INTO users(first_name, last_name, username, email, pass_hash, dob, role)\n
        \nVALUES ("${request.firstname}","${request.lastname}","${request.username}",\n
        "${request.email}",\n
        "${hashedPassword}",\n
        "${request.dob}","${request.role}");`

  const data = {
    status: 200,
    request: request,
    query: query,
    rows: mode == "sql" ? rows : null,
  };

  return NextResponse.json(data);
}
