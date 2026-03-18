import type { Spbu } from '../../types/spbu';
import FuelStatusBadge from './FuelStatusBadge';
import MapsButton from './MapsButton';
import LastUpdatedText from './LastUpdatedText';

interface SpbuCardProps {
  station: Spbu;
}

export default function SpbuCard({ station }: SpbuCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-1 text-pretty">{station.name}</h2>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{station.address}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {station.fuels.map(fuel => (
          <FuelStatusBadge key={fuel.type} type={fuel.type} status={fuel.status} />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 min-w-0">
        <LastUpdatedText isoDate={station.lastUpdated} />
        <MapsButton url={station.mapsUrl} />
      </div>
    </div>
  );
}
