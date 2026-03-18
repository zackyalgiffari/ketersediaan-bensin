import type { Spbu } from '../../types/spbu';
import SpbuCard from './SpbuCard';

interface SpbuCardListProps {
  stations: Spbu[];
}

export default function SpbuCardList({ stations }: SpbuCardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stations.map(station => (
        <SpbuCard key={station.id} station={station} />
      ))}
    </div>
  );
}
