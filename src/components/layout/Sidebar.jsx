import Dropdown from "../common/Dropdown";
import { RxDashboard } from "react-icons/rx";
import { LuTickets } from "react-icons/lu";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar border-e border-e-primary h-full p-2 bg-dim">
        <div className="container p-2 flex flex-col gap-3">
          {/* SELECTED */}
            <Dropdown          
            icon={<RxDashboard size={16} />}
              name="Dashboard"
              items={[
                {label: "Overview", path: "/"},
                {label: "Settings", path: "/settings"}
              ]}
            />

          {/* NORMAL */}
          <Dropdown
          icon={<LuTickets />}
          name="Tickets"
          items={[
            {label: "All Tickets", path: "/tickets"},
            {label: "Create New", path: "/tickets/new"}
          ]}
          />


        </div>
      </div>
    </>
  );
}
