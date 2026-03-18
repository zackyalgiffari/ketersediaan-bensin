interface UpdateAllButtonProps {
  onUpdate: () => void;
}

export default function UpdateAllButton({ onUpdate }: UpdateAllButtonProps) {
  return (
    <button
      onClick={onUpdate}
      className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-[background-color] cursor-pointer"
    >
      Update Semua Timestamp
    </button>
  );
}
