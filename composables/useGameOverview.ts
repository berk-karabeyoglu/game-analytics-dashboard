import { useFetch } from "nuxt/app";
import type { GameOverview } from "../types/GameOverview";

export const useGameOverview = (gameId: string) => {
  const { data, pending, error } = useFetch<GameOverview>(
    `https://dhcase-mockapi.vercel.app/api/game/${gameId}/overview`,
    {
      server: true,
      lazy: true,
    }
  );

  return {
    overview: data,
    isLoading: pending,
    error,
  };
};
