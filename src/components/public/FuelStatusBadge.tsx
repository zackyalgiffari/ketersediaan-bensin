import type { FuelType, FuelStatus } from '../../types/spbu';
import { FUEL_LABELS } from '../../types/spbu';

interface FuelStatusBadgeProps {
  type: FuelType;
  status: FuelStatus;
}

export default function FuelStatusBadge({ type, status }: FuelStatusBadgeProps) {
  const isAvailable = status === 'available';

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
        isAvailable
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isAvailable ? 'bg-green-500' : 'bg-red-500'
        }`}
        aria-hidden="true"
      />
      {FUEL_LABELS[type]}: {isAvailable ? 'Tersedia' : 'Kosong'}
    </span>
  );
}
