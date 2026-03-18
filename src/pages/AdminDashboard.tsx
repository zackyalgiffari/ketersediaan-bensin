import { useSpbu } from '../contexts/SpbuContext';
import SpbuAdminList from '../components/admin/SpbuAdminList';
import UpdateAllButton from '../components/admin/UpdateAllButton';

export default function AdminDashboard() {
  const { stations, toggleFuelStatus, updateAllTimestamps } = useSpbu();

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard Admin
        </h1>
        <UpdateAllButton onUpdate={updateAllTimestamps} />
      </div>
      <SpbuAdminList stations={stations} onToggleFuel={toggleFuelStatus} />
    </>
  );
}
