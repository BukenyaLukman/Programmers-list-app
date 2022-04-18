import Link from 'next/link'
import image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img src="/logo.png" width={128} height={77} alt="logo"/>
        </div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/programmers">
            <a>Programmers</a>
        </Link>
    </nav>
  )
}

export default Navbar