import type { EventType } from "../types/EventType";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CalendarDays, MapPin } from "lucide-react";

export default function EventCard({ event }: { event: EventType }) {
   if (!event || !event._embedded?.venues?.length || !event.dates?.start) {
    return (
      <Card className="w-full max-w-sm rounded-xl shadow-md flex flex-col items-center justify-center p-6 text-center bg-red-50 border border-red-200">
        <AlertTriangle className="w-8 h-8 text-red-500 mb-2" />
        <p className="text-red-700 font-semibold">Event details unavailable</p>
        <p className="text-sm text-gray-600 mt-1">
          Something went wrong loading this event. Please try again later.
        </p>
      </Card>
    );
  }
  
  const venue = event._embedded.venues[0];
  const location = `${venue.name}, ${venue.city.name}, ${
    venue.state?.name || ""
  }, ${venue.country.name}`;
  const date = event.dates.start.localDate;
  const time = event.dates.start.localTime || "TBD";
  const type = event.classifications?.[0]?.segment?.name || "Unknown";
  const genre = event.classifications?.[0]?.genre?.name || "Unknown";

  return (
    <Card className="w-full max-w-sm rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2">
          {event.name}
        </CardTitle>
        <Badge
          variant="secondary"
          className="w-fit text-xs font-medium px-2 py-1 rounded-full"
        >
          {type} - {genre}
        </Badge>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex flex-col gap-2 text-sm text-gray-600 flex-grow">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-4 h-4 text-gray-500" />
          <p>
            <span className="font-medium">Date:</span> {date}{" "}
            {time ? `at ${time}` : ""}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
          <p>
            <span className="font-medium">Location:</span>
            <span className="text-wrap">{location}</span>
          </p>
        </div>
        {event.info && (
          <p className="text-gray-700 text-sm mt-2 line-clamp-3">
            {event.info}
          </p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
