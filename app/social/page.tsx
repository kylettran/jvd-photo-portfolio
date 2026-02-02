export default function Social() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-8">Follow JVD Photography</h1>

      <div className="flex flex-row flex-wrap items-center justify-center gap-6 text-lg">
        <a
          href="https://instagram.com/YOURCLIENT"
          target="_blank"
          rel="noreferrer"
          className="bg-neutral-900 border border-neutral-700 px-6 py-4 rounded-lg hover:border-white transition flex flex-col items-center gap-2 w-40"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-8 w-8"
            fill="currentColor"
          >
            <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5Zm5-4.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25Z" />
          </svg>
          <span className="text-sm text-gray-400">Instagram</span>
        </a>

        <a
          href="https://facebook.com/YOURCLIENT"
          target="_blank"
          rel="noreferrer"
          className="bg-neutral-900 border border-neutral-700 px-6 py-4 rounded-lg hover:border-white transition flex flex-col items-center gap-2 w-40"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-8 w-8"
            fill="currentColor"
          >
            <path d="M13.5 8.5V7a2 2 0 0 1 2-2h2V3h-2a4 4 0 0 0-4 4v1.5H9.5v2h2V21h2v-10.5h2.5l.5-2Z" />
          </svg>
          <span className="text-sm text-gray-400">Facebook</span>
        </a>

        <a
          href="https://twitter.com/YOURCLIENT"
          target="_blank"
          rel="noreferrer"
          className="bg-neutral-900 border border-neutral-700 px-6 py-4 rounded-lg hover:border-white transition flex flex-col items-center gap-2 w-40"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-8 w-8"
            fill="currentColor"
          >
            <path d="M4 4h4.6l5.1 6.8L19 4h1.9l-6.3 8.3L20 20h-4.6l-5.4-7.1L5 20H3.1l6.7-8.8Z" />
          </svg>
          <span className="text-sm text-gray-400">X</span>
        </a>
      </div>
    </main>
  );
}
