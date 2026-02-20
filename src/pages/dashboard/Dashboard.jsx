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

            <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
              <div className="top flex gap-1 items-center">
                <span className="bg-green-200 p-1 rounded-sm">
                  <IoLayersOutline />
                </span>
                <span className="font-semibold">All Tickets</span>
              </div>
              <div className=" flex items-center p-1">
                <span className="font-semibold text-3xl">830</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>

            <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
              <div className="top flex gap-1 items-center">
                <span className="bg-blue-200 p-1 rounded-sm">
                  <PiTicket />
                </span>
                <span className="font-semibold">Open Tickets</span>
              </div>
              <div className=" flex items-center p-1">
                <span className="font-semibold text-3xl">430</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>

            <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
              <div className="top flex gap-1 items-center">
                <span className="bg-violet-200 p-1 rounded-sm">
                  <LuRepeat />
                </span>
                <span className="font-semibold">In Progress</span>
              </div>
              <div className=" flex items-center p-1">
                <span className="font-semibold text-3xl">430</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>

            <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
              <div className="top flex gap-1 items-center">
                <span className="bg-yellow-100 p-1 rounded-sm">
                  <AiOutlineStop />
                </span>
                <span className="font-semibold">Resolved Tickets</span>
              </div>
              <div className=" flex items-center p-1">
                <span className="font-semibold text-3xl">200</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>

            <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
              <div className="top flex gap-1 items-center">
                <span className="bg-cyan-200 p-1 rounded-sm">
                  <HiMiniChevronDown />
                </span>
                <span className="font-semibold">Low Priority</span>
              </div>
              <div className=" flex items-center p-1">
                <span className="font-semibold text-3xl">15</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>

            <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
              <div className="top flex gap-1 items-center">
                <span className="bg-purple-200 p-1 rounded-sm">
                  <HiMiniEquals />
                </span>
                <span className="font-semibold">Mid Priority</span>
              </div>
              <div className=" flex items-center p-1">
                <span className="font-semibold text-3xl">22</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>

            <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
              <div className="top flex gap-1 items-center">
                <span className="bg-red-200 p-1 rounded-sm">
                  <HiMiniChevronUp />
                </span>
                <span className="font-semibold">High Priority</span>
              </div>
              <div className=" flex items-center p-1">
                <span className="font-semibold text-3xl">430</span>
              </div>
              <div className="border-t border-dashed border-gray-300"></div>
            </div>
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
