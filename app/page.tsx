export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <h1 className="text-6xl font-bold mb-6">JVD Photography</h1>
        <p className="text-gray-400 text-lg">
          Timeless imagery crafted with intention and emotion.
        </p>
      </section>

      {/* 3x3 GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {[
          "/images/photo1.jpg",
          "/images/photo2.jpg",
          "/images/photo3.jpg",
          "/images/photo4.jpg",
          "/images/photo5.jpg",
          "/images/photo6.jpg",
          "/images/photo7.jpg",
          "/images/photo8.jpg",
          "/images/photo9.jpg",
        ].map((src, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-xl bg-neutral-800"
          >
            <img
              src={src}
              alt="portfolio"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}

      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-10 text-center text-gray-500 text-sm">
        © 2026 JVD Photography
      </footer>

    </main>
  )
}