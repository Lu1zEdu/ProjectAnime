export type Anime = {
    id: number;
    Titulo: string;
    ano: number;
    genero: string[];
    descricao: string;
    Rank: number;
    Score: number;
    Your_Score: number;
    Status: string;
}

export type AnimeData =  {
    animes: Anime[];
}
export type User = {
    id: number;
    Name: string;
    Email: string;
    Password: string;
    DataNascimento: Date;
    Animes: Anime[];
}