import Link from 'next/link'

const Nav =() => (
    // <nav className="navbar navbar-expand top">
    <nav className="navbar navbar-expand navbar-fixed sub visible navbar-sticky">
        <div className="container header">
            <ul className="navbar-nav">
               <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link pl-0">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-link pl-0">About</a>
                    </Link>
                    <Link href="/faqs">
                        <a className="nav-link pl-0">FAQs</a>
                    </Link>
                    <Link href="/tracks?page=1">
                        <a className="nav-link pl-0">Tracks</a>
                    </Link>
                    <Link href="/contact_us">
                        <a className="nav-link pl-0">Contact Us</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;