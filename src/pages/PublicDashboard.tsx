import { useSpbu } from '../contexts/SpbuContext';
import SpbuCardList from '../components/public/SpbuCardList';

export default function PublicDashboard() {
  const { stations } = useSpbu();

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Ketersediaan BBM — Kabupaten Solok
      </h1>
      <SpbuCardList stations={stations} />
    </>
  );
}
