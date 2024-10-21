// https://api.myanimelist.net/v2/anime?q=one&limit=4'

import { NextResponse } from "next/server";
import { promises as fs } from "fs";

// export async function GET() {
//     const response = await fetch(
//         'https://api.myanimelist.net/v2/anime?q=one&limit=4'
//     )

//     const data = await response.json()
//     return NextResponse.json(data)
// }


//Melhores Animes
export async function GET() {
    const file = await fs.readFile(process.cwd() + "/src/data/Anime/Base.json" , "utf-8");
    const animes = JSON.parse(file);
    return NextResponse.json(animes);
}