export interface TimeRange {
  start: number;
  end: number;
}

export interface DaySchedule {
  morning?: TimeRange;
  afternoon?: TimeRange;
}

export interface WeekSchedule {
  [key: number]: DaySchedule; // 1-5 for Monday-Friday
}