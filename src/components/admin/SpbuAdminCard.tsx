import type { Spbu, FuelType } from '../../types/spbu';
import FuelToggle from './FuelToggle';
import LastUpdatedText from '../public/LastUpdatedText';

interface SpbuAdminCardProps {
  station: Spbu;
  onToggleFuel: (stationId: string, fuelType: FuelType) => void;
}

export default function SpbuAdminCard({ station, onToggleFuel }: SpbuAdminCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-1">{station.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{station.address}</p>

      <div className="space-y-3 mb-4">
        {station.fuels.map(fuel => (
          <FuelToggle
            key={fuel.type}
            type={fuel.type}
            status={fuel.status}
            onToggle={() => onToggleFuel(station.id, fuel.type)}
          />
        ))}
      </div>

      <LastUpdatedText isoDate={station.lastUpdated} />
    </div>
  );
}
