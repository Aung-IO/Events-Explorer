import { useQuery } from "@tanstack/react-query";

const CORS_PROXY = "https://corsproxy.io/?";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events";
const API_KEY = import.meta.env.VITE_API_KEY;

export function useFetchEvent(eventId: String) {
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      const url = `${BASE_URL}/${eventId}.json?apikey=${API_KEY}`;
      const res = await fetch(`${CORS_PROXY}${encodeURIComponent(url)}`);
      const json = await res.json();

      return {
        event: json || null,
      };
    },
    // Only fetch if eventId is provided
    enabled: !!eventId,
  });
}
