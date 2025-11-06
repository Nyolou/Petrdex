"use client";

import { useEffect, useRef, useState } from "react";
import mainBanner from "../../Videos/mainpage-banner1.mp4"; // ✅ Correct path for your project

export default function HomePage() {
  const videoRef = useRef(null);
  const [videoDone, setVideoDone] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ✅ When video finishes, trigger page reveal
    const handleEnd = () => {
      setVideoDone(true);

      // Smooth scroll down to main content
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }, 300);
    };

    video.addEventListener("ended", handleEnd);
    return () => video.removeEventListener("ended", handleEnd);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-x-hidden">

      {/* ✅ FULLSCREEN INTRO VIDEO */}
      <div
        className={`fixed top-0 left-0 w-full h-screen transition-opacity duration-1000 ${
          videoDone ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ zIndex: 20 }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src={mainBanner} type="video/mp4" />
        </video>

        {/* Optional overlay to make text readable */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Center text on video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold drop-shadow-lg">
            Welcome to PETRDEX
          </h1>
        </div>
      </div>

      {/* ✅ MAIN PAGE CONTENT (revealed after video) */}
      <div
        className={`relative transition-opacity duration-1000 ${
          videoDone ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 1 }}
      >
        <section className="h-screen bg-white flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold mb-6">
            Discover Pets Near You 
          </h2>
          <p className="text-lg text-gray-600 max-w-xl text-center">
            Browse, upload, and share adorable pets. Make connections with other animal lovers!
          </p>
        </section>

        <section className="min-h-screen bg-gray-50 px-8 py-20">
          <h3 className="text-3xl font-semibold mb-4">Featured Pets</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example placeholders */}
            <div className="w-full h-48 bg-gray-300 rounded-xl"></div>
            <div className="w-full h-48 bg-gray-300 rounded-xl"></div>
            <div className="w-full h-48 bg-gray-300 rounded-xl"></div>
          </div>
        </section>
      </div>

    </div>
  );
}
