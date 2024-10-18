import Link from 'next/link'

export default function Header1() {
    return (
        <div>
            <div>
                {/* <Imagem> */}
            </div>
            <nav className='ULi'>
                <ul>
                    <li><Link href="/Manga">Mangas</Link></li>
                    <li><Link href="/Anime">Anime</Link></li>
                    <li><Link href="/News">News</Link></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><Link href="/Login">Login</Link></li>
                    <li><Link href="/SingUp">SingUp</Link></li>
                </ul>
            </nav>
        </div>
    )
}
