import Link from "next/link"

export default function Lista1() {
    const Lista = [
        {
            "id": 1,
            "Rank": 1,
            "Titulo": "Attack on Titan",
            "Score": 9.5,
            "Your_Score": 10,
            "Status": "Completed"
        },
        {
            "id": 2,
            "Rank": 2,
            "Titulo": "My Hero Academia",
            "Score": 8.9,
            "Your_Score": 9,
            "Status": "On Going"
        },
        {
            "id": 3,
            "Rank": 3,
            "Titulo": "Demon Slayer",
            "Score": 9.2,
            "Your_Score": 10,
            "Status": "Completed"
        }
    ]
    return (
        <div>
            <table>
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
                    {Lista.map((number) => (
                        <tr key={number.id}>
                            <td>{number.Rank}</td>
                            <td>{number.Titulo}</td>
                            <td>{number.Score}</td>
                            <td><Link href="/Routes/YourArea">Your Score</Link></td>
                            <td>{number.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
