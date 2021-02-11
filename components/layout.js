import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'



const name = 'M Usman'
export const siteTitle = 'Demo BlueEconomy'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        {/* site icon */}
        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />

        {/* <meta charset="utf-8" /> */}
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="author" content="Codings" />

        {/* Favicons */}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/apple-touch-icon-114x114.png" />

        {/* Vendor Stylesheet */}

        {/* <link rel="stylesheet" href={bootstrap} /> */}
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/slider.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/vendor/icons.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/icons-fa.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/animation.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/gallery.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/cookie-notice.min.css" />

        {/* Custom Stylesheet */}

        <link rel="stylesheet" href="/assets/css/default.css" />

        {/* Theme Color */}
        <meta name="theme-color" content="#21333e" />
      </Head>
      <header id="header">
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}