import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import TicketsPage from "../pages/tickets/TicketsPage";

export const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/tickets", element: <TicketsPage /> },
]);
