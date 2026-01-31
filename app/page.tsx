export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          JVD Photography
        </h1>
        <p className="text-gray-400 text-xl max-w-xl">
          Timeless imagery crafted with intention and emotion.
        </p>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1,2,3,4,5,6].map((num) => (
          <div
            key={num}
            className="aspect-[4/5] bg-neutral-800 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
          />
        ))}
      </section>

      {/* SOCIAL FOOTER */}
      <footer className="mt-auto border-t border-neutral-800 py-12 text-center">

        <div className="flex justify-center gap-10 text-gray-400 text-lg mb-6">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 JVD Photography
        </p>

      </footer>
    </main>
  )
}