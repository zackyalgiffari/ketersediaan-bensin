import type { FuelType, FuelStatus } from '../../types/spbu';
import { FUEL_LABELS } from '../../types/spbu';

interface FuelToggleProps {
  type: FuelType;
  status: FuelStatus;
  onToggle: () => void;
}

export default function FuelToggle({ type, status, onToggle }: FuelToggleProps) {
  const isAvailable = status === 'available';

  return (
    <label className="flex items-center justify-between gap-3 cursor-pointer">
      <span className="text-sm font-medium text-gray-700">{FUEL_LABELS[type]}</span>
      <div className="flex items-center gap-2">
        <span
          className={`text-xs font-medium ${
            isAvailable ? 'text-green-600' : 'text-red-600'
          }`}
          aria-hidden="true"
        >
          {isAvailable ? 'Tersedia' : 'Kosong'}
        </span>
        <div className="relative">
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={onToggle}
            className="sr-only peer"
            aria-label={`${FUEL_LABELS[type]}: ${isAvailable ? 'Tersedia' : 'Kosong'}`}
          />
          <div
            className={`w-11 h-6 rounded-full transition-[background-color] cursor-pointer peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 ${
              isAvailable ? 'bg-green-500' : 'bg-red-400'
            }`}
            aria-hidden="true"
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                isAvailable ? 'translate-x-5.5' : 'translate-x-0.5'
              }`}
            />
          </div>
        </div>
      </div>
    </label>
  );
}
