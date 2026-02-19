import Dropdown from "../common/Dropdown";
import { TbLayoutDashboard } from "react-icons/tb";
import { LuTickets } from "react-icons/lu";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar border-e border-e-primary w-full h-full p-2">
        <div className="container p-2 flex flex-col gap-3">
          {/* SELECTED */}
            <Dropdown          
            icon={<TbLayoutDashboard size={16} />}
              name="Dashboard"
              items={["Profile", "Settings", "Logout"]}
            />{" "}

          {/* NORMAL */}
          <Dropdown
          icon={<LuTickets />}
          name="Tickets"
          items={["Account", "Logout"]}
          />


        </div>
      </div>
    </>
  );
}
