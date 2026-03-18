import { useSpbu } from '../contexts/SpbuContext';
import SpbuAdminList from '../components/admin/SpbuAdminList';
import UpdateAllButton from '../components/admin/UpdateAllButton';
import SetAllStatusButton from '../components/admin/SetAllStatusButton';

export default function AdminDashboard() {
  const { stations, toggleFuelStatus, setAllFuelStatus, updateAllTimestamps } = useSpbu();

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 text-wrap-balance">
          Dashboard Admin
        </h1>
        <div className="flex flex-wrap gap-2">
          <SetAllStatusButton status="available" onSet={() => setAllFuelStatus('available')} />
          <SetAllStatusButton status="empty" onSet={() => setAllFuelStatus('empty')} />
          <UpdateAllButton onUpdate={updateAllTimestamps} />
        </div>
      </div>
      <SpbuAdminList stations={stations} onToggleFuel={toggleFuelStatus} />
    </>
  );
}
