export type AnimeProps = {
    mal_id: number;
    title: string;
    synopsis: string;
    year: number;
    genres: { name: string }[];
    score: number;
    rank: number;
    status: string;
};

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