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
            Name,
            Email,
            Password,
            Animes: [],
            DataNascimento: new Date(),
        };
        users.push(newUser);
        const fileJson = JSON.stringify(users, null, 2);
        await fs.writeFile(process.cwd() + "/src/data/User/base.json", fileJson);
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Falha na gravação: " + error }, { status: 500 });
    }
}



export async function GET(request: Request) {
    // Lê o arquivo JSON
    const file = await fs.readFile(process.cwd() + "/src/data/User/base.json", "utf-8");
    const users = JSON.parse(file);

    // Obtém os parâmetros da URL
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    // Se um e-mail for fornecido, procura o usuário
    if (email) {
        const User = users.find(User => User.Email === email);
        if (User) {
            return NextResponse.json(User, { status: 200 }); // Retorna o usuário se encontrado
        } else {
            return NextResponse.json({ error: "User not found." }, { status: 404 }); // Retorna erro se não encontrado
        }
    }
}