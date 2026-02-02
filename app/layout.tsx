import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-950 text-white">
        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-neutral-800">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="JVD Photography logo"
              width={36}
              height={36}
              className="rounded"
              priority
            />
            <span className="font-semibold tracking-wide">JVD Photography</span>
          </Link>

          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/social" className="hover:text-whtie transition">
              Social
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
