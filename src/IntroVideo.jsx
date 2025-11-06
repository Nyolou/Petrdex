import { useRef, useEffect, useState } from "react";

export default function IntroVideo() {
  const videoRef = useRef(null);
  const mainRef = useRef(null);
  const [introDone, setIntroDone] = useState(false);

  const endIntro = () => {
    setIntroDone(true);
    setTimeout(() => {
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.addEventListener("ended", endIntro);
    return () => vid && vid.removeEventListener("ended", endIntro);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🎬 Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className={`absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${
          introDone ? "opacity-0" : "opacity-100"
        }`}
      >
        <source src="/videos/title-banner.mp4" type="video/mp4" />
      </video>

      {/* Overlay text */}
      <div className="relative z-10 text-center text-white top-1/3 drop-shadow-lg">
        <h1 className="text-6xl font-bold">Petrdex</h1>
        <p className="text-xl mt-3 text-gray-200">Discover. Collect. Create.</p>
      </div>

      {/* Skip button */}
      {!introDone && (
        <button
          onClick={endIntro}
          className="absolute bottom-10 right-10 bg-black/60 text-white px-5 py-2 rounded-full hover:bg-white/20 transition"
        >
          Skip Intro
        </button>
      )}

      {/* 🌍 Main content (fades in) */}
      <section
        ref={mainRef}
        className={`min-h-screen bg-gray-100 text-gray-800 px-8 py-24 transition-all duration-1000 ${
          introDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-semibold mb-6">Welcome to Petrdex</h2>
        <p className="max-w-2xl text-lg">
          Here’s where you’ll find the latest Petr drops, collections, and
          more. Stay tuned for updates!
        </p>
      </section>
    </div>
  );
}
