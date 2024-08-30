import useSWR from "swr";

const DISCORD_API_URL = 'https://discord.com/api/v9/invites/nevgMjpfwB?with_counts=true';

class FetchError extends Error {
  info: any;
  status: number;

  constructor(message: string, info: any, status: number) {
    super(message);
    this.info = info;
    this.status = status;
  }
}

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    const info = await response.json();
    throw new FetchError('An error occurred while fetching the data.', info, response.status);
  }
  return response.json();
};

export const useDiscord = () => {
  const { data, error } = useSWR(DISCORD_API_URL, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000, // 1 minute
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};