import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../app/page.jsx';
import PetrdexPage from '../app/petrdex/page.jsx';
import ProfilePage from '../app/profile/page.jsx';
import UploadPage from '../app/upload/page.jsx';
import Auth from './Auth.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 text-white p-4">
          <div className="flex gap-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/petrdex" className="hover:text-gray-300">Petrdex</Link>
            <Link to="/profile" className="hover:text-gray-300">Profile</Link>
            <Link to="/upload" className="hover:text-gray-300">Upload</Link>
            <Link to="/auth" className="hover:text-gray-300">Login</Link>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/petrdex" element={<PetrdexPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
