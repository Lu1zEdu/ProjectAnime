export type AnimeProps = {
    mal_id: number;
    title: string;
    synopsis: string;
    year: number;
    genres: { name: string }[];
    score: number;
    rank: number;
    status: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
};

export type AnimeData =  {
    animes: AnimeProps[];
}
export type User = {
    id: number;
    Name: string;
    Email: string;
    Password: string;
    DataNascimento: Date;
    Animes: AnimeProps[];
}