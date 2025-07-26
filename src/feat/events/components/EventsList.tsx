import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router";
import { useFetchAllEvents } from "../hooks/events/useFetchAllEvents";
import { useSearchEvent } from "../hooks/events/useSearchEvent";
import EventCard from "./EventCard";
import type { EventType } from "../types/EventType";


export default function EventsList() {
  const [page, setPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  // Default event list
  const { data: defaultData, isPending: isLoadingDefault, error: errorDefault } = useFetchAllEvents(page, 10);

  // Search event list
  const { data: searchData, isLoading: isLoadingSearch, error: errorSearch } = useSearchEvent(query);

  const isSearching = query.length > 0;

  console.log("Default Data:", defaultData);


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(keyword.trim());
    setPage(0);
  };

  const events = isSearching ? searchData?.events || [] : defaultData?.events || [];
  const pageInfo = isSearching ? searchData?.pageInfo || {} : defaultData?.pageInfo || {};

  if (isLoadingDefault || isLoadingSearch) return <p className="text-center">Loading events...</p>;
  if (errorDefault || errorSearch) return <p className="text-center text-red-500">Error fetching events</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Explore Your Events</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2 justify-center mb-6">
        <input
          type="text"
          placeholder="Search events..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border rounded px-4 py-2 w-1/2"
        />
        <Button type="submit">Search</Button>
        {isSearching && (
          <Button
            variant="outline"
            onClick={() => {
              setQuery("");
              setKeyword("");
              setPage(0);
            }}
          >
            Clear
          </Button>
        )}
      </form>

      {/* Event List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {events.length ? (
          events.map((event: EventType) => (
            <Link
              to={`/events/${event.id}`}
              key={event.id}
              className="block hover:scale-105 transition-transform"
            >
              <EventCard event={event} />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full">No events found.</p>
        )}
      </div>

      {/* Pagination */}
      {events.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button
            variant="outline"
            disabled={page === 0}
            onClick={() => setPage(0)}
          >
            First
          </Button>
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
      )}
    </div>
  );
}
