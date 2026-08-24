import { NextResponse } from 'next/server';
import { db } from "@/lib/db"

export async function POST(req) {
    const request = await req.json();
    console.log("Api:", request)

    if(!request.title || !request.director || !request.musician || !request.runtime || !request.releaseDate || !request.posterUrl || !request.cast || !request.selectedGenres || !request.ageRating || !request.streamUrl || !request.ottPlatform || !request.thumbnailUrl || !request.trailerId) return NextResponse.json(
      {error: "Insufficient data fields"},
      {status: 401},
    )
    
const [rows] = await db.query(
  `INSERT INTO movies
  (title, director, musician, runtime, release_date, rating, \`cast\`, genres,
   poster_url, thumbnail_url, trailer_id, stream_platform, stream_url)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [
    request.title,
    request.director,
    request.musician,
    request.runtime,
    request.releaseDate,
    request.ageRating,
    JSON.stringify(request.cast),
    JSON.stringify(request.selectedGenres),
    request.posterUrl,
    request.thumbnailUrl,
    request.trailerId,
    request.ottPlatform,
    request.streamUrl
  ]
);
const query = `INSERT INTO users(first_name, last_name, username, email, pass_hash, dob, role)\n
        \nVALUES ("${request.firstname}","${request.lastname}","${request.username}",\n
        "${request.email}",\n
        "${hashedPassword}",\n
        "${request.dob}","${request.role}");`

  const data = {
    status: 200,
    request: request,
    query: query,
    rows: rows
  };

  return NextResponse.json(data);
}
