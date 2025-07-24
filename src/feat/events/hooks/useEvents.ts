import { useQuery } from "@tanstack/react-query";
import type { EventType } from "../types/EventType";

const CORS_PROXY = "https://corsproxy.io/?";
const URL =
  "https://app.ticketmaster.com/discovery/v2/events.json?apikey=JQNfAJNlkUHTU7DIOk997lmI9QiEazEB";

export default function useEvents() {
  return useQuery<EventType[]>({
    queryKey: ["eventsData"],
    queryFn: async () => {
      const res = await fetch(`${CORS_PROXY}${encodeURIComponent(URL)}`);
      const data = await res.json();
      return data._embedded?.events || [];
    },
  });
}
