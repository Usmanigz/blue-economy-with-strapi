import Link from 'next/link'

const Nav =() => (
    <nav>
        <Link href="/">
            <a >Home</a>
        </Link>
        <Link href="/about">
            <a >About</a>
        </Link>
        <Link href="/faq">
            <a >FAQs</a>
        </Link>
        <Link href="/tracks">
            <a >Tracks</a>
        </Link>
    </nav>
);

export default Nav;