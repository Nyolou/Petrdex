import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../app/page.jsx";
import PetrdexPage from "../app/petrdex/page.jsx";
import ProfilePage from "../app/profile/page.jsx";
import UploadPage from "../app/upload/page.jsx";
import { useState } from "react";

export default function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* ✅ NAVIGATION BAR */}
        {showNav && (
          <nav className="bg-gray-800 text-white p-4 z-20 relative transition-opacity duration-1000 ease-in-out">
            <div className="flex gap-4">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/petrdex" className="hover:text-gray-300">Petrdex</Link>
              <Link to="/profile" className="hover:text-gray-300">Profile</Link>
              <Link to="/upload" className="hover:text-gray-300">Upload</Link>
            </div>
          </nav>
        )}

        {/* ✅ MAIN ROUTES */}
        <main className="flex-1">
          <Routes>
            {/* ❌ HomePage no longer needs setShowNav */}
            <Route path="/" element={<HomePage />} />

            <Route path="/petrdex" element={<PetrdexPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}
