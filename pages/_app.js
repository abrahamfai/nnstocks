/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NStock The Stock NFTs Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-black-500">
              Home 
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-6 text-black-500">
              My Stock NFTs
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp