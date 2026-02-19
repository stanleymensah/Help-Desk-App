import { TbLayoutDashboard } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { LuTicket } from "react-icons/lu";
import { HiMiniChevronDown } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar border-e border-e-primary w-full h-full p-2">
        <div className="container p-2 flex flex-col gap-3">
          {/* SELECTED */}
          <div className="navItem p-3 flex items-center justify-between text-xs bg-primary text-white rounded-sm">
            <span className="flex items-center gap-2">
              <TbLayoutDashboard />
              DashBaord
            </span>

            <HiMiniChevronDown />
          </div>

          {/* NORMAL */}
          <div className="navItem p-3 flex justify-between items-center text-xs bg-transparent text-primary rounded-sm">
            <span className="flex items-center gap-2">
              <CgProfile />
              Profile
            </span>
            <HiMiniChevronDown />
          </div>

          <div className="navItem p-3 flex justify-between items-center text-xs bg-transparent text-primary rounded-sm">
            <span className="flex items-center gap-2">
              <LuTicket />
              Tickets
            </span>
            <HiMiniChevronDown />
          </div>
        </div>
      </div>
    </>
  );
}
