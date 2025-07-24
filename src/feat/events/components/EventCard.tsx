import type { EventType } from "../types/EventType";

export default function EventCard({ event }: { event: EventType }) {
  const venue = event._embedded.venues[0];
  const location = `${venue.name}, ${venue.city.name}, ${venue.state?.name || ""}, ${venue.country.name}`;
  const dateTime = new Date(event.dates.start.dateTime).toLocaleString();
  const type = event.classifications?.[0]?.segment?.name || "Unknown";
  const genre = event.classifications?.[0]?.genre?.name || "Unknown";
  const imageUrl = venue.images?.[0]?.url || "https://fastly.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA";


  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border">

      {/* Event Image */}
      <img
        src={imageUrl}
        alt={event.name} 
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg text-wrap font-semibold text-gray-800 truncate">{event.name}</h2>

         <span className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded">
            {type} - {genre}
          </span>

        <p className="text-sm text-gray-500">
          <span className="font-medium">Date:</span> {dateTime}
        </p>
        <p className="text-sm text-gray-500 truncate">
          <span className="font-medium">Location:</span> 
          <span className="text-wrap">

          {location}
          </span>
        </p>

        {event.info && (
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {event.info}
          </p>
        )}

       
      </div>
    </div>
  );
}
