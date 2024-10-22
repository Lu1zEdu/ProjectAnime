'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimeProps } from "@/Types";

export default function Anime() {
    const [animes, setAnimes] = useState<AnimeProps[]>([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const [lastVisiblePage, setLastVisiblePage] = useState(1);

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const response = await fetch(`/api/animes?page=${paginaAtual}`);
                const data = await response.json();
                setAnimes(data.data);
                setHasNextPage(data.has_next_page);
                setLastVisiblePage(data.last_visible_page);
            } catch (error) {
                console.error('Erro ao buscar animes:', error);
            }
        };

        fetchAnimes();
    }, [paginaAtual]);

    const proximaPagina = () => {
        if (hasNextPage) {
            setPaginaAtual(paginaAtual + 1);
        }
    }

    const paginaAnterior = () => {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1)
        }
    }

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

            <div>
                <button onClick={paginaAnterior} disabled={paginaAtual === 1} >
                    Anterior
                </button>

                <span> Página {paginaAtual} de {lastVisiblePage} </span>
                
                <button onClick={proximaPagina}>
                    Próximo
                </button>
            </div>
        </div>
    );
}
