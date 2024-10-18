"use client";

export default function YourArea({params}:{params:{id:number}}) {
    return (
        <div>
        <h1>Area do Usuário</h1>
        <p>Id: {params.id}</p>
    </div>
    )

}