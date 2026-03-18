import type { Spbu } from '../types/spbu';
import { initialSpbuData } from './initial-spbu-data';

const STORAGE_KEY = 'spbu-data:v1';
const AUTH_KEY = 'auth:v1';

export function loadSpbuData(): Spbu[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as Spbu[];
    }
  } catch {
    // corrupted data, fall through to default
  }
  return initialSpbuData;
}

export function saveSpbuData(stations: Spbu[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stations));
  } catch {
    // storage full or unavailable
  }
}

export function loadAuthState(): boolean {
  try {
    return localStorage.getItem(AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function saveAuthState(isAuthenticated: boolean): void {
  try {
    if (isAuthenticated) {
      localStorage.setItem(AUTH_KEY, 'true');
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  } catch {
    // storage unavailable
  }
}
