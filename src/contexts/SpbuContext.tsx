import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Spbu, FuelType, FuelStatus } from '../types/spbu';
import { loadSpbuData, saveSpbuData } from '../data/storage';

interface SpbuContextValue {
  stations: Spbu[];
  toggleFuelStatus: (stationId: string, fuelType: FuelType) => void;
  setAllFuelStatus: (status: FuelStatus) => void;
  updateAllTimestamps: () => void;
}

const SpbuContext = createContext<SpbuContextValue | null>(null);

export function SpbuProvider({ children }: { children: ReactNode }) {
  const [stations, setStations] = useState<Spbu[]>(() => loadSpbuData());

  useEffect(() => {
    saveSpbuData(stations);
  }, [stations]);

  function toggleFuelStatus(stationId: string, fuelType: FuelType) {
    setStations(prev =>
      prev.map(station => {
        if (station.id !== stationId) return station;
        return {
          ...station,
          fuels: station.fuels.map(fuel => {
            if (fuel.type !== fuelType) return fuel;
            return {
              ...fuel,
              status: fuel.status === 'available' ? 'empty' : 'available',
            };
          }),
          lastUpdated: new Date().toISOString(),
        };
      })
    );
  }

  function setAllFuelStatus(status: FuelStatus) {
    const now = new Date().toISOString();
    setStations(prev =>
      prev.map(station => ({
        ...station,
        fuels: station.fuels.map(fuel => ({ ...fuel, status })),
        lastUpdated: now,
      }))
    );
  }

  function updateAllTimestamps() {
    const now = new Date().toISOString();
    setStations(prev =>
      prev.map(station => ({ ...station, lastUpdated: now }))
    );
  }

  const handleStorageChange = useCallback((e: StorageEvent) => {
    if (e.key === 'spbu-data:v1' && e.newValue) {
      try {
        setStations(JSON.parse(e.newValue) as Spbu[]);
      } catch { /* ignore corrupted data */ }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [handleStorageChange]);

  return (
    <SpbuContext.Provider value={{ stations, toggleFuelStatus, setAllFuelStatus, updateAllTimestamps }}>
      {children}
    </SpbuContext.Provider>
  );
}

export function useSpbu(): SpbuContextValue {
  const ctx = useContext(SpbuContext);
  if (!ctx) throw new Error('useSpbu must be used within SpbuProvider');
  return ctx;
}
