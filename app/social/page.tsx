export default function Social() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
  
        <h1 className="text-4xl font-bold mb-8">
          Follow JVD Photography
        </h1>
  
        <div className="flex flex-col gap-6 text-lg">
  
          <a
            href="https://instagram.com/YOURCLIENT"
            target="_blank"
            className="bg-neutral-900 border border-neutral-700 px-6 py-4 rounded-lg hover:border-white transition"
          >
            Instagram
          </a>
  
          <a
            href="https://facebook.com/YOURCLIENT"
            target="_blank"
            className="bg-neutral-900 border border-neutral-700 px-6 py-4 rounded-lg hover:border-white transition"
          >
            Facebook
          </a>
  
          <a
            href="https://twitter.com/YOURCLIENT"
            target="_blank"
            className="bg-neutral-900 border border-neutral-700 px-6 py-4 rounded-lg hover:border-white transition"
          >
            Twitter
          </a>
  
        </div>
  
      </main>
    )
  }