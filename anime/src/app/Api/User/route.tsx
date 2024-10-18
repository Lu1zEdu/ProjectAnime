import { User } from '@/Types';
import fs from 'fs/promises'; 
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const file = await fs.readFile(process.cwd() + "/src/data/User/base.json", "utf-8");
        const users: User[] = JSON.parse(file);
        const { id, Name, Email, Password } = await request.json();
        const newUser: User = {
            id: id || (users.length > 0 ? users[users.length - 1].id + 1 : 1), 
            Name ,
            Email,
            Password,
            Animes: []
        };
        users.push(newUser);
        const fileJson = JSON.stringify(users, null, 2);
        await fs.writeFile(process.cwd() + "/src/data/User/base.json", fileJson);
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Falha na gravação: " + error }, { status: 500 });
    }
}
