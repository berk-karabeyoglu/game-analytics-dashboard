export interface DailyStreamCounts {
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
}

export interface HoursWatched {
  value: number;
  delta: number;
  deltaPercentage: number;
}

export interface AverageViewers {
  value: number;
  delta: number;
  deltaPercentage: number;
}

export interface GameStream {
  hoursWatched: HoursWatched;
  averageViewers: AverageViewers;
  dailyStreamCounts: DailyStreamCounts;
}

export interface StreamPerformanceData {
  dates: string[];
  watchTime: number[];
  engagement: number[];
}
