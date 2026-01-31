export default function Contact() {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-20">
  
        <div className="max-w-xl w-full">
  
          <h1 className="text-4xl font-bold mb-8 text-center">
            Contact
          </h1>
  
          <form className="flex flex-col gap-6">
  
            <input
              type="text"
              placeholder="Your Name"
              className="bg-neutral-900 border border-neutral-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
            />
  
            <input
              type="email"
              placeholder="Your Email"
              className="bg-neutral-900 border border-neutral-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
            />
  
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-neutral-900 border border-neutral-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
            />
  
            <button className="bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition">
              Send Message
            </button>
  
          </form>
  
        </div>
  
      </main>
    )
  }