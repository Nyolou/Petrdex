export default function PetrCard({ title, creator, tags, img }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded mb-2" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-sm text-gray-600">by {creator}</p>
      <div className="flex gap-2 mt-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
