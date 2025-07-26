import { createBrowserRouter } from "react-router";
import EventsList from "./feat/events/components/EventsList";
import EventDetail from "./feat/events/components/EventDetail";
import AppLayout from "./AppLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
        { index: true, Component: EventsList },
        { path: "event/:id", Component: EventDetail }
    ]
  },

  
]);