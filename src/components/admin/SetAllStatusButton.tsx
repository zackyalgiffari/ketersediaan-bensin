import type { FuelStatus } from '../../types/spbu';

interface SetAllStatusButtonProps {
  status: FuelStatus;
  onSet: () => void;
}

const config = {
  available: {
    label: 'Semua Tersedia',
    classes:
      'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500',
  },
  empty: {
    label: 'Semua Kosong',
    classes:
      'bg-red-600 hover:bg-red-700 focus-visible:ring-red-500',
  },
} as const;

export default function SetAllStatusButton({ status, onSet }: SetAllStatusButtonProps) {
  const { label, classes } = config[status];

  return (
    <button
      onClick={onSet}
      className={`px-4 py-2 text-white text-sm font-medium rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-[background-color] cursor-pointer ${classes}`}
    >
      {label}
    </button>
  );
}
