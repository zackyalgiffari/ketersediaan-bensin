import { Outlet } from 'react-router';
import Header from '../shared/Header';

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg"
      >
        Langsung ke konten
      </a>
      <Header />
      <main id="main-content" className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
