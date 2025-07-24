export interface Classification {
  segment?: { name: string };
  genre?: { name: string };
}

export interface Venue {
  name: string;
  city: { name: string };
  state?: { name: string };
  country: { name: string };
  images?: { url: string }[];
}

export interface EventType {
  id: string;
  name: string;
  type: string;
  dates: {
    start: { localDate: string, localTime: string };
  };
  info?: string;
  classifications?: Classification[];
  _embedded: {
    venues: Venue[];
  };
}

export interface PageInfo {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface EventsResponse {
  events: EventType[];
  pageInfo: PageInfo;
}

