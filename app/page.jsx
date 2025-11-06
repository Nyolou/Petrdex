export default function HomePage() {
  return (
    <section className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to Petrdex!</h1>
      <p className="mb-6 text-lg">
        Collect, create, and share your favorite Petr stickers 🐶🐱
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="/petrdex"
          className="bg-pink-400 text-white px-5 py-2 rounded-xl shadow-md"
        >
          View Petrdex
        </a>
        <a
          href="/upload"
          className="bg-blue-400 text-white px-5 py-2 rounded-xl shadow-md"
        >
          Upload Your Petr
        </a>
      </div>
    </section>
  );
}
