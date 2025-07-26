import { useParams } from "react-router";
import { useFetchEvent } from "../hooks/useFetchEvent";


export default function EventDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchEvent(id!);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data?.event) return <p>Event not found</p>;

  const event = data.event;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg ">
      <div>
       
        <h1 className="text-3xl font-bold mb-4">{event.name}</h1>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Date:</span> {event.dates.start.localDate}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Time:</span> {event.dates.start.localTime}
        </p>

       
        <img
          src={event.images[0]?.url}
          alt={event.name}
          className="w-full max-h-96 object-cover rounded-lg mb-6"
        />
      </div>
    
      <div>
        {/* Venue Info */}
        {event._embedded?.venues?.[0] && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Venue</h2>
            <p>{event._embedded.venues[0].name}</p>
            <p>
              {event._embedded.venues[0].address?.line1},{" "}
              {event._embedded.venues[0].city?.name},{" "}
              {event._embedded.venues[0].country?.name}
            </p>
          </div>
        )}


        {event.classifications?.[0] && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Category</h2>
            <p>
              {event.classifications[0].segment?.name} /{" "}
              {event.classifications[0].genre?.name}
            </p>
          </div>
        )}

      
        {event.url && (
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Buy Tickets
          </a>
        )}
      </div>

      <div>
        {event.info && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2"> Info</h2>
            <p>{event.info}</p>
          </div>
        )}
      </div>

    
     
    </div>

  );
};


