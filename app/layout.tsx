import "./globals.css"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-950 text-white">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-neutral-800">
          <h1 className="font-semibold tracking-wide">JVD Photography</h1>

          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/social" className="hover:text-whtie transition">Social</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </nav>

        {children}

      </body>
    </html>
  )
}