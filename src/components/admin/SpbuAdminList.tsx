import type { Spbu, FuelType } from '../../types/spbu';
import SpbuAdminCard from './SpbuAdminCard';

interface SpbuAdminListProps {
  stations: Spbu[];
  onToggleFuel: (stationId: string, fuelType: FuelType) => void;
}

export default function SpbuAdminList({ stations, onToggleFuel }: SpbuAdminListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stations.map(station => (
        <SpbuAdminCard
          key={station.id}
          station={station}
          onToggleFuel={onToggleFuel}
        />
      ))}
    </div>
  );
}
