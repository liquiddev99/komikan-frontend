import axios from "axios";
import useSWR from "swr";

async function fetcher(url: string) {
  const res = await axios.get(url, { withCredentials: true });
  return res.data;
}

export function useAuth() {
  const { data, error, isLoading } = useSWR("/api/auth", fetcher);

  if (error)
    return {
      authenticated: false,
      user: null,
      loading: false,
    };

  return {
    authenticated: Boolean(data),
    user: data,
    loading: isLoading,
  };
}
