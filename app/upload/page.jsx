export default function UploadPage() {
  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Upload a Petr</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Petr Title" className="border p-2 rounded" />
        <input type="text" placeholder="Creator Name" className="border p-2 rounded" />
        <input type="text" placeholder="Tags (comma separated)" className="border p-2 rounded" />
        <input type="text" placeholder="Image URL" className="border p-2 rounded" />
        <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
    </section>
  );
}
