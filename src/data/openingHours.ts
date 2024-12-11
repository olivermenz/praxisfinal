import { WeekSchedule } from '../types/openingHours';

export const OPENING_HOURS: WeekSchedule = {
  1: { // Monday
    morning: { start: 8, end: 11 },
    afternoon: { start: 15, end: 17 }
  },
  2: { // Tuesday
    morning: { start: 8, end: 11 },
    afternoon: { start: 15, end: 17 }
  },
  3: { // Wednesday
    morning: { start: 8, end: 11 }
  },
  4: { // Thursday
    morning: { start: 8, end: 11 },
    afternoon: { start: 15, end: 17 }
  },
  5: { // Friday
    morning: { start: 8, end: 11 }
  }
};