interface LastUpdatedTextProps {
  isoDate: string;
}

const formatter = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'long',
  timeStyle: 'short',
  timeZone: 'Asia/Jakarta',
});

export default function LastUpdatedText({ isoDate }: LastUpdatedTextProps) {
  const formatted = formatter.format(new Date(isoDate));

  return (
    <p className="text-xs text-gray-500">
      Terakhir diperbarui: {formatted} WIB
    </p>
  );
}
