import Link from 'next/link'

export default function Header1() {
    return (
        <div>
            <div>
                {/* <Imagem> */}
            </div>
            <nav className='ULi'>
                <ul>
                    <li><Link href="/Routes/Manga">Mangas</Link></li>
                    <li><Link href="/Routes/Anime">Anime</Link></li>
                    <li><Link href="/Routes/News">News</Link></li>
                </ul>
            </nav>
        </div>
    )
}
