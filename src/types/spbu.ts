export type FuelType = 'pertalite' | 'pertamax' | 'bio-solar' | 'pertamina-dex';

export type FuelStatus = 'available' | 'empty';

export interface SpbuFuelStatus {
  type: FuelType;
  status: FuelStatus;
}

export interface Spbu {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  fuels: SpbuFuelStatus[];
  lastUpdated: string; // ISO 8601
}

export const FUEL_LABELS: Record<FuelType, string> = {
  pertalite: 'Pertalite',
  pertamax: 'Pertamax',
  'bio-solar': 'Bio Solar',
  'pertamina-dex': 'Pertamina Dex',
};
