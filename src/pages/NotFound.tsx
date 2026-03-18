import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Halaman tidak ditemukan</p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors no-underline"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
