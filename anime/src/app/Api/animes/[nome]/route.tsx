import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { nome: string } }) {
    const { nome } = params;

    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${nome}`);
    const data = await res.json();

    return NextResponse.json(data);
}
