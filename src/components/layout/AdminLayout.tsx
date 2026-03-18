import { Outlet, Link } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg"
      >
        Langsung ke konten
      </a>
      <header className="bg-gray-900 text-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <Link to="/admin" className="text-xl font-bold no-underline text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded">
              Admin — Monitor BBM Solok
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded no-underline">
              Lihat Public
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-[background-color] cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main id="main-content" className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
