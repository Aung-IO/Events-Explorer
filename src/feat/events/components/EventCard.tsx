import type { EventType } from '../types/EventType';

export default function EventCard({event} : {event: EventType}) {
    const venue = event._embedded.venues[0];
    const location = `${venue.name}, ${venue.city.name}, ${venue.state?.name || ""}, ${venue.country.name}`;
    const dateTime = new Date(event.dates.start.dateTime).toLocaleString();

    return (
        <div className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p className="text-gray-600 mt-1">
                <span className="font-medium">Type:</span> {event.type}
            </p>
            <p className="text-gray-600">
                <span className="font-medium">Date:</span> {dateTime}
            </p>
            <p className="text-gray-600">
                <span className="font-medium">Location:</span> {location}
            </p>
            {event.info && (
                <p className="mt-2 text-gray-700">
                    <span className="font-medium">Description:</span> {event.info}
                </p>
            )}
        </div>
    )
}
