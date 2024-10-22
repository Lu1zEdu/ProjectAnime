'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimeProps } from "@/Types";

export default function Anime() {
    const [animes, setAnimes] = useState<AnimeProps[]>([]);

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const response = await fetch('/api/animes');
                const data = await response.json();
                setAnimes(data.data);
            } catch (error) {
                console.error('Erro ao buscar animes:', error);
            }
        };

        fetchAnimes();
    }, []);

    return (
        <div>
            <h1>Todos os Animes</h1>

            <div>
                {animes.map((anime) => (
                    <div key={anime.mal_id}>
                        <Image src={anime.images.jpg.image_url} alt={anime.title} width={200} height={300}/> 
                        <h2>{anime.title}</h2>
                        <p>{anime.synopsis}</p>
                        <p>Nota: {anime.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
