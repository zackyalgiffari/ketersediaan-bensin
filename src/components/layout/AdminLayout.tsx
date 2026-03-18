import { Outlet, Link } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gray-900 text-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <Link to="/admin" className="text-xl font-bold no-underline text-white">
              Admin — Monitor BBM Solok
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-gray-300 hover:text-white no-underline">
              Lihat Public
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
