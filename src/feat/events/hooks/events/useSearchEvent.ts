import { useQuery } from "@tanstack/react-query";

const CORS_PROXY = "https://corsproxy.io/?";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events";
const API_KEY = import.meta.env.VITE_API_KEY;

export function useSearchEvent(keyword: string) {
  return useQuery({
    queryKey: ["searchEvents", keyword], // Unique key for cache
    queryFn: async () => {
      const url = `${BASE_URL}.json?keyword=${encodeURIComponent(keyword)}&apikey=${API_KEY}`;
      const res = await fetch(`${CORS_PROXY}${url}`);
      if (!res.ok) throw new Error("Failed to fetch events");
      const json = await res.json();

      return {
        events: json._embedded?.events || [],
        pageInfo: json.page || {},
      };
    },
    enabled: !!keyword, // Only run when keyword is not empty
  });
}
