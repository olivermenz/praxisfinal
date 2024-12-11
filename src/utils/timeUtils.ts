import { DaySchedule } from '../types/openingHours';

export const isTimeInRange = (
  currentHour: number,
  schedule: DaySchedule
): boolean => {
  if (!schedule) return false;

  const isMorningOpen = schedule.morning && 
    currentHour >= schedule.morning.start && 
    currentHour < schedule.morning.end;

  const isAfternoonOpen = schedule.afternoon && 
    currentHour >= schedule.afternoon.start && 
    currentHour < schedule.afternoon.end;

  return isMorningOpen || isAfternoonOpen;
};