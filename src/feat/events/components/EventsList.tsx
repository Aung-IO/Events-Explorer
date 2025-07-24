
import { useState } from "react";
import { Button } from "@/components/ui/button";
import EventCard from "./EventCard";
import { useEvents } from "../hooks/useEvents";

export default function EventsList() {
    const [page, setPage] = useState(0); // Ticketmaster API uses 0-based pages
    const { data, isPending, error } = useEvents(page, 10);

    if (isPending) return <p className="text-center">Loading events...</p>;
    if (error) return <p className="text-center text-red-500">Error fetching events</p>;

    const events = data?.events || [];
    const pageInfo = data?.pageInfo || {};

    return (
        <div>
            {/* Event List */}
            <div className="p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Upcoming Events</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                    {events.length ? (
                        events.map((event) => <EventCard key={event.id} event={event} />)
                    ) : (
                        <p className="text-center">No events found.</p>
                    )}
                </div>
            </div>


            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <Button
                    variant="outline"
                    disabled={page === 0}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                >
                    Previous
                </Button>
                <span className="text-sm">
                    Page {page + 1} of {pageInfo.totalPages || 1}
                </span>
                <Button
                    variant="outline"
                    disabled={page + 1 >= (pageInfo.totalPages || 1)}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}
