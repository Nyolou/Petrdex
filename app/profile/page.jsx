export default function ProfilePage() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <img
        src="/placeholder.jpg"
        alt="Profile"
        className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold">Username</h2>
      <p className="text-gray-600">Sticker Collector • Joined 2025</p>
    </section>
  );
}
