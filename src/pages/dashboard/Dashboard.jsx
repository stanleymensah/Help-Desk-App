import { Link } from "react-router-dom";
import { PiTicket } from "react-icons/pi";
import { LuRepeat } from "react-icons/lu";
import { AiOutlineStop } from "react-icons/ai";
import { IoLayersOutline } from "react-icons/io5";
import { HiMiniChevronUp } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";
import { HiMiniEquals } from "react-icons/hi2";
import TicketsByStatusChart from "./TicketsByStatusChart";
import TicketsByPriorityChart from "./TicketsByPriorityChart";
import TicketStatCard from "./TicketStatCard";

export default function Dashboard() {
  return (
    <>
      <div className="container text-xs flex flex-col gap-6">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Dashboard</span>
          <span>
            Welcome back! Here's what is going on with your ticketing so far.
          </span>
        </div>

        {/* Ticket Essentials */}
        <div className=" flex flex-col gap-3">
          <div className="flex gap-1">
            {/* Ticket Stat Card */}

            <TicketStatCard
              title="All Tickets"
              number={50}
              icon={<IoLayersOutline />}
            />

            <TicketStatCard
              title="Open Tickets"
              number={10}
              icon={<PiTicket />}
            />

            <TicketStatCard title="In Progess" number={5} icon={<LuRepeat />} />

            <TicketStatCard
              title="Resolved Tickets"
              number={10}
              icon={<AiOutlineStop />}
            />

            <TicketStatCard
              icon={<HiMiniChevronDown />}
              title="Low Priority"
              number={5}
            />

            <TicketStatCard
              icon={<HiMiniEquals />}
              title="Mid Priority"
              number={5}
            />

            <TicketStatCard
              icon={<HiMiniChevronUp />}
              title="High Priority"
              number={5}
            />
          </div>

          <div className="min-h-30 rounded-lg w-full flex gap-2">
            <div className="w-1/2 border border-gray-300 rounded-lg p-2">
              <TicketsByStatusChart />
            </div>
            <div className="w-1/2 border bg-transparent border-gray-300 rounded-lg p-2">
              <TicketsByPriorityChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
