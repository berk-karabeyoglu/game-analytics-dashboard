import type { GameStream } from "../types/GameStream";

export const useGameStream = (gameId: string) => {
  const { data, pending, error } = useFetch<GameStream>(
    `https://dhcase-mockapi.vercel.app/api/game/${gameId}/stream`,
    {
      server: true,
      lazy: true,
      key: `game-stream-${gameId}`,
    }
  );

  return {
    stream: data,
    isLoading: pending,
    error,
  };
};
