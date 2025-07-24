import useEvents from "../hooks/useEvents";
import EventCard from "./EventCard";


export default function EventsList() {

    const { data: events, isPending, error } = useEvents();


    if (isPending) return <p className="text-center">Loading events...</p>;
    if (error) return <p className="text-center">Error fetching events</p>;

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            {events?.length ? (
                events.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
                <p className="text-center">No events found.</p>
            )}
        </div>
    );
}
