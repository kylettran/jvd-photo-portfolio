"use client"

import { useState } from "react"

const images = [
  { id: 1, src: "https://source.unsplash.com/random/1200x1600?portrait", category: "Portrait" },
  { id: 2, src: "https://source.unsplash.com/random/1200x900?fashion", category: "Fashion" },
  { id: 3, src: "https://source.unsplash.com/random/1200x1400?wedding", category: "Wedding" },
  { id: 4, src: "https://source.unsplash.com/random/1200x1000?street", category: "Street" },
  { id: 5, src: "https://source.unsplash.com/random/1200x1300?travel", category: "Travel" },
  { id: 6, src: "https://source.unsplash.com/random/1200x1500?landscape", category: "Landscape" },
]

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const filteredImages = selected
    ? images.filter((img) => img.category === selected)
    : images

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl font-bold tracking-tight mb-6">
          JVD Photography
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          Timeless imagery crafted with intention and emotion.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 mb-12 flex flex-wrap gap-4 justify-center">
        {["Portrait", "Fashion", "Wedding", "Street", "Travel", "Landscape"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(selected === cat ? null : cat)}
            className={`px-4 py-2 rounded-full border transition ${
              selected === cat
                ? "bg-white text-black"
                : "border-gray-600 hover:border-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-24">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setActiveImage(img.src)}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt=""
            className="max-h-[90%] max-w-[90%] rounded-lg"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-gray-800">
        © 2026 JVD Photography
      </footer>

    </main>
  )
}