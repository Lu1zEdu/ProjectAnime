// https://api.myanimelist.net/v2/anime?q=one&limit=4'

import { NextResponse } from 'next/server'

export async function GET() {
    const response = await fetch(
        'https://api.myanimelist.net/v2/anime?q=one&limit=4'
    )

    const data = await response.json()
    return NextResponse.json(data)
}