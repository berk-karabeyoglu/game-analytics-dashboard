import { useFetch } from "nuxt/app";
import type { StreamPerformanceData } from "../types/GameStream";

export const useStreamPerformance = async (gameId: string) => {
  const { data, pending, error } = await useFetch<StreamPerformanceData>(
    `https://dhcase-mockapi.vercel.app/api/game/${gameId}/performance`
  );

  return {
    performanceData: data,
    isLoading: pending,
    error,
  };
};
