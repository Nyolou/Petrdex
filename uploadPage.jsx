import React, { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [tags, setTags] = useState("");

  const cloudName = "difvk0vg3"; // replace with your Cloudinary cloud name
  const unsignedUploadPreset = "petrdex"; // set this in Cloudinary dashboard

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", unsignedUploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setUrl(data.secure_url);
      alert("Upload successful!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Check the console.");
    }
  };

  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Upload a Petr</h1>
      <form className="flex flex-col gap-4" onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Petr Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Creator Name"
          className="border p-2 rounded"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="border p-2 rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} className="border p-2 rounded" />
        <button
          type="submit"
          className="bg-pink-400 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </form>

      {url && (
        <div className="mt-4">
          <p className="font-semibold">Uploaded Image:</p>
          <img src={url} alt="Uploaded Petr" className="w-full mt-2 rounded" />
        </div>
      )}
    </section>
  );
}
