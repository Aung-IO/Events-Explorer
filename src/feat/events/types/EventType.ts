export type EventType = {
    id: string;
    name: string;
    info?: string;
    dates: {
        start: {
            dateTime: string;
        };
    };
    type: string;
    _embedded: {
        venues: {
            name: string;
            city: { name: string };
            state?: { name: string };
            country: { name: string };
        }[];
    };
};