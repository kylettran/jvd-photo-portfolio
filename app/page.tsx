"use client";

import { useMemo, useState } from "react";

const GALLERIES = {
  Portraits: [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
  ],
  Weddings: [
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
  ],
  Commercial: [
    "/images/photo9.jpg",
    "/images/photo1.jpg",
    "/images/photo4.jpg",
    "/images/photo6.jpg",
  ],
  "Music + Film": [
    "/images/photo2.jpg",
    "/images/photo5.jpg",
    "/images/photo8.jpg",
    "/images/photo3.jpg",
  ],
};

type GalleryKey = keyof typeof GALLERIES;

export default function Home() {
  const [activeGallery, setActiveGallery] =
    useState<GalleryKey>("Portraits");
  const galleryImages = useMemo(
    () => GALLERIES[activeGallery],
    [activeGallery]
  );
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 pt-28 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_40%),linear-gradient(180deg,#0b0b0b,transparent_60%)]" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl float-slow" />
        <div className="absolute top-32 -right-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl float-fast" />

        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-6">
            Photography + Videography
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
            The visual experience that turns moments into legacy.
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-3xl mx-auto">
            JVD crafts cinematic stories and iconic portraits that feel bigger
            than life, yet deeply personal. This is the kind of work clients
            call once-in-a-lifetime.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:scale-[1.02] transition"
            >
              Book a Session
            </a>
            <a
              href="/social"
              className="px-7 py-3 rounded-full border border-neutral-700 text-white hover:border-white transition"
            >
              View Socials
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Cinematic Direction",
                copy: "Story-first shoots with lighting that feels like film.",
              },
              {
                title: "Editorial Retouching",
                copy: "Polished, high-end finishes that still feel real.",
              },
              {
                title: "Signature Experience",
                copy: "From first call to final delivery, everything is curated.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            An immersive visual journey.
          </h2>
          <p className="text-gray-300 text-lg">
            Every project is engineered to feel elevated — from creative
            direction and mood boards to final delivery. Clients say it feels
            like stepping into a short film, and walking away with their favorite
            stills from it.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {(Object.keys(GALLERIES) as GalleryKey[]).map((label) => {
              const isActive = activeGallery === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveGallery(label)}
                  className={`px-4 py-2 rounded-full border transition ${
                    isActive
                      ? "border-white text-white bg-white/10"
                      : "border-neutral-800 text-gray-400 hover:border-white/60 hover:text-white"
                  }`}
                  aria-pressed={isActive}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.map((src) => (
            <div
              key={src}
              className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-800"
            >
              <img
                src={src}
                alt={`${activeGallery} gallery`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "The images feel unreal. Every single frame looks like it belongs in a magazine.",
              name: "Alyssa + Mark",
            },
            {
              quote:
                "We trusted JVD with our story and got the most cinematic memories back.",
              name: "Jasmine T.",
            },
            {
              quote:
                "The direction, the energy, the finish — there’s nothing like it.",
              name: "Vault Studios",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <p className="text-gray-200 leading-relaxed">“{item.quote}”</p>
              <p className="text-sm text-gray-400 mt-4">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto rounded-3xl border border-neutral-800 bg-gradient-to-r from-neutral-900 to-neutral-950 p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Ready to create something unforgettable?
          </h2>
          <p className="text-gray-300 mb-8">
            Let’s build a visual experience that feels like your story deserves.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-[1.02] transition"
          >
            Start the Project
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-10 text-center text-gray-500 text-sm">
        © 2026 JVD Photography
      </footer>
    </main>
  );
}
