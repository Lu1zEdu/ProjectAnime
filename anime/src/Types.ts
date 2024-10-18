export interface Anime {
    id: number;
    titulo: string;
    ano: number;
    genero: string[];
    descricao: string;
    Rank: number;
    Score: number;
    Your_Score: number;
    Status: string;
}

export interface AnimeData {
    animes: Anime[];
}
