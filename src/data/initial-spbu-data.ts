import type { Spbu } from '../types/spbu';

const now = new Date().toISOString();

export const initialSpbuData: Spbu[] = [
  {
    id: 'spbu-lubuk-selasih',
    name: 'SPBU Lubuk Selasih',
    address: 'Simpang arah Padang - Solok - Muara Labuh',
    mapsUrl: 'https://maps.google.com/?q=SPBU+Lubuk+Selasih+Solok',
    fuels: [
      { type: 'pertalite', status: 'available' },
      { type: 'pertamax', status: 'available' },
      { type: 'bio-solar', status: 'available' },
      { type: 'pertamina-dex', status: 'empty' },
    ],
    lastUpdated: now,
  },
  {
    id: 'spbu-koto-baru',
    name: 'SPBU Koto Baru',
    address: 'Kec. Kubung - Jalur Utama',
    mapsUrl: 'https://maps.google.com/?q=SPBU+Koto+Baru+Kubung+Solok',
    fuels: [
      { type: 'pertalite', status: 'available' },
      { type: 'pertamax', status: 'empty' },
      { type: 'bio-solar', status: 'available' },
      { type: 'pertamina-dex', status: 'empty' },
    ],
    lastUpdated: now,
  },
  {
    id: 'spbu-saok-laweh',
    name: 'SPBU Saok Laweh',
    address: 'Arah Kota Solok',
    mapsUrl: 'https://maps.google.com/?q=SPBU+Saok+Laweh+Solok',
    fuels: [
      { type: 'pertalite', status: 'available' },
      { type: 'pertamax', status: 'available' },
      { type: 'bio-solar', status: 'empty' },
      { type: 'pertamina-dex', status: 'empty' },
    ],
    lastUpdated: now,
  },
  {
    id: 'spbu-alahan-panjang',
    name: 'SPBU Alahan Panjang',
    address: 'Kec. Lembah Gumanti',
    mapsUrl: 'https://maps.google.com/?q=SPBU+Alahan+Panjang+Solok',
    fuels: [
      { type: 'pertalite', status: 'available' },
      { type: 'pertamax', status: 'empty' },
      { type: 'bio-solar', status: 'available' },
      { type: 'pertamina-dex', status: 'empty' },
    ],
    lastUpdated: now,
  },
  {
    id: 'spbu-sumani',
    name: 'SPBU Sumani',
    address: 'Kec. X Koto Singkarak',
    mapsUrl: 'https://maps.google.com/?q=SPBU+Sumani+X+Koto+Singkarak+Solok',
    fuels: [
      { type: 'pertalite', status: 'available' },
      { type: 'pertamax', status: 'available' },
      { type: 'bio-solar', status: 'available' },
      { type: 'pertamina-dex', status: 'available' },
    ],
    lastUpdated: now,
  },
  {
    id: 'spbu-talang',
    name: 'SPBU Talang',
    address: 'Kec. Gunung Talang',
    mapsUrl: 'https://maps.google.com/?q=SPBU+Talang+Gunung+Talang+Solok',
    fuels: [
      { type: 'pertalite', status: 'available' },
      { type: 'pertamax', status: 'empty' },
      { type: 'bio-solar', status: 'available' },
      { type: 'pertamina-dex', status: 'empty' },
    ],
    lastUpdated: now,
  },
];
