export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      
      {/* Hero */}
      <section className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          John Doe Photography
        </h1>
        <p className="text-gray-400 text-lg">
          Capturing moments. Telling stories.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6,7,8,9].map((num) => (
          <div
            key={num}
            className="aspect-square bg-gray-800 rounded-xl overflow-hidden"
          >
            <img
              src={`https://source.unsplash.com/random/800x800?sig=${num}`}
              alt="portfolio"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </section>

      {/* Footer */}
      <section className="max-w-6xl mx-auto mt-20 text-gray-500 text-sm">
        © 2026 John Doe Photography
      </section>

    </main>
  )
}