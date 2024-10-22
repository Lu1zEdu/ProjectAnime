export async function GET() {
    const response = await fetch('https://api.jikan.moe/v4/anime');
    const data = await response.json();

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}


//Melhores Animes
// export async function GET() {
//     const file = await fs.readFile(process.cwd() + "/src/data/Anime/Base.json" , "utf-8");
//     const animes = JSON.parse(file);
//     return NextResponse.json(animes);
// }