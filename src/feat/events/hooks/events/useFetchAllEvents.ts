import { useQuery } from "@tanstack/react-query";
import type { EventsResponse } from "../../types/EventType";

const CORS_PROXY = "https://corsproxy.io/?";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = import.meta.env.VITE_API_KEY;

export function useFetchAllEvents(page: number, size: number = 10) {
  return useQuery<EventsResponse>({
    queryKey: ["eventsData", page],
    queryFn: async () => {
      const url = `${BASE_URL}?apikey=${API_KEY}&page=${page}&size=${size}`;
      const res = await fetch(`${CORS_PROXY}${encodeURIComponent(url)}`);
      const json = await res.json();
      return {
        events: json._embedded?.events || [],
        pageInfo: json.page, // contains size, totalPages, totalElements, number
      };
    },
  });
}
