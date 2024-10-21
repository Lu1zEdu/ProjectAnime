"use client";
import { Anime } from "@/Types"; // Ensure Anime type is correctly defined in your Types file
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ListaMelhoresAnimes () {
    const router = useRouter();
    const [animes, setAnimes] = useState<Anime[]>([]); // Corrected state variable name

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const response = await fetch('http://localhost:3000/Api/Anime');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Anime[] = await response.json();
                setAnimes(data);
            } catch (error) {
                console.error('Error fetching anime data:', error);
            }
        };

        fetchAnimes();
    }, []);

    const isAuthenticated = () => {
        return !!localStorage.getItem('user'); // Example: check local storage
    };

    const handleYourScoreClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent default link behavior

        if (isAuthenticated()) {
            router.push("/Routes/YourArea"); // Redirect to Your Score page
        } else {
            router.push("/login"); // Redirect to login page
        }
    };

    return (
        <div>
            <table className="Table1">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Titulo</th>
                        <th>Score</th>
                        <th>Your Score</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.length > 0 ? (
                        animes.map((item) => (
                            <tr key={item.id}>
                                <td>{item.Rank}</td>
                                <td>{item.Titulo}</td>
                                <td>{item.Score}</td>
                                <td>
                                    <a href="#" onClick={handleYourScoreClick}>Your Score</a>
                                </td>
                                <td>
                                    <Link href="/status-page">Status</Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
