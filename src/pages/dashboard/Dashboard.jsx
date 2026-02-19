// import TicketsPage from "../tickets/TicketsPage";

import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      {/* <TicketsPage /> */}
      <h1>Welcome to your Dashboard</h1>
      <Link to="/tickets">See All your Tickets</Link>
    </>
  );
}
