import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold text-gray-900 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">
          Monitor BBM Solok
        </Link>
        <p className="text-sm text-gray-500 mt-1">
          Ketersediaan BBM di SPBU Kabupaten Solok
        </p>
      </div>
    </header>
  );
}
