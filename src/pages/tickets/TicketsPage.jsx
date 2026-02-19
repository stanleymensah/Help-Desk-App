import { TbEdit } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";

export default function TicketsPage() {
  return (
    <>
      <div className="container flex flex-col gap-2">
        {/* HEADER FOR TICKETS */}
        <div className="card flex items-center gap-4 border border-gray-200 rounded-lg py-3 px-5 bg-gray-50 font-semibold text-sm text-gray-700">
          {/* ID */}
          <div className="w-16 flex-shrink-0">
            <span>ID</span>
          </div>

          {/* Title */}
          <div className="w-32 flex-shrink-0">
            <span>Title</span>
          </div>

          {/* Description */}
          <div className="flex-1 min-w-0 justify-center">
            <span>Description</span>
          </div>

          {/* Priority */}
          <div className="flex-shrink-0">
            <span>Priority</span>
          </div>

          {/* Status */}
          <div className="flex-shrink-0">
            <span>Status</span>
          </div>

          {/* Date */}
          <div className="w-20 flex-shrink-0 text-right">
            <span>Date</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 flex-shrink-0 w-[88px]">
            <span>Actions</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs">
          {/* TICKET CARD ---- IN PROGESS */}
          <div className="card flex items-center gap-4 border border-primary rounded-lg py-3 px-5 hover:shadow-md transition-shadow">
            {/* ID - Small fixed width */}
            <div className="w-16 flex-shrink-0">
              <span className="font-semibold text-gray-700">#1022</span>
            </div>

            {/* Title - Medium fixed width */}
            <div className="w-32 flex-shrink-0">
              <span className="font-medium text-gray-900">Payment Issue</span>
            </div>

            {/* Description - Takes remaining space, truncates */}
            <div className="flex-1 min-w-0">
              <span className="text-gray-600 line-clamp-1">
                Made payment a few minutes ago but wont go through
              </span>
            </div>

            {/* Priority - Badge */}
            <div className="flex-shrink-0">
              <span className="bg-red-100 text-red-600 font-semibold py-1.5 px-3 rounded-full">
                High
              </span>
            </div>

            {/* Status - Badge */}
            <div className="flex-shrink-0">
              <span className="bg-orange-100 text-orange-600 font-semibold py-1.5 px-3 rounded-full">
                In Progress
              </span>
            </div>

            {/* Date - Small fixed width */}
            <div className="w-20 flex-shrink-0 text-right">
              <span className="text-gray-500">{new Date().getFullYear()}</span>
            </div>

            {/* Actions - Fixed width for buttons */}
            <div className="flex gap-2 flex-shrink-0">
              <button className="bg-green-50 hover:bg-green-100 p-2 rounded-lg text-green-600 transition-colors">
                <TbEdit size={18} />
              </button>
              <button className="bg-red-50 hover:bg-red-100 p-2 rounded-lg text-red-600 transition-colors">
                <HiOutlineTrash size={18} />
              </button>
            </div>
          </div>

          {/* TICKET CARD ---- RESOLVED */}
          <div className="card flex items-center gap-4 border border-primary rounded-lg py-3 px-5 hover:shadow-md transition-shadow">
            {/* ID - Small fixed width */}
            <div className="w-16 flex-shrink-0">
              <span className=" font-semibold text-gray-700">#1023</span>
            </div>

            {/* Title - Medium fixed width */}
            <div className="w-40 flex-shrink-0">
              <span className=" font-medium text-gray-900">
                Feature Suggestion
              </span>
            </div>

            {/* Description - Takes remaining space, truncates */}
            <div className="flex-1 min-w-0">
              <span className=" text-gray-600 line-clamp-1">
                Make the edit button smaller and the ability to edit faster
              </span>
            </div>

            <span className="bg-blue-100 text-blue-600 text-xs font-semibold py-1.5 px-3 rounded-full">
              Low
            </span>

            {/* Status - Badge */}
            <div className="flex-shrink-0">
              <span className="bg-green-100 text-green-600 text-xs font-semibold py-1.5 px-3 rounded-full">
                Resolved
              </span>
            </div>

            {/* Date - Small fixed width */}
            <div className="w-20 flex-shrink-0 text-right">
              <span className=" text-gray-500">{new Date().getFullYear()}</span>
            </div>

            {/* Actions - Fixed width for buttons */}
            <div className="flex gap-2 flex-shrink-0">
              <button className="bg-blue-50 hover:bg-blue-100 p-2 rounded-lg text-blue-600 transition-colors">
                <TbEdit size={18} />
              </button>
              <button className="bg-red-50 hover:bg-red-100 p-2 rounded-lg text-red-600 transition-colors">
                <HiOutlineTrash size={18} />
              </button>
            </div>
          </div>

          {/* TICKET CARD ---- OPEN  */}
          <div className="card flex items-center gap-4 border border-primary rounded-lg py-3 px-5 hover:shadow-md transition-shadow">
            {/* ID - Small fixed width */}
            <div className="w-16 flex-shrink-0">
              <span className=" font-semibold text-gray-700">#1024</span>
            </div>

            {/* Title - Medium fixed width */}
            <div className="w-32 flex-shrink-0">
              <span className=" font-medium text-gray-900">Profile Update</span>
            </div>

            {/* Description - Takes remaining space, truncates */}
            <div className="flex-1 min-w-0">
              <span className=" text-gray-600 line-clamp-1">
                Unable to update profile picture and bio information
              </span>
            </div>

            {/* Priority - Badge */}
            <div className="flex-shrink-0">
              <span className="bg-yellow-100 text-yellow-600 text-xs font-semibold py-1.5 px-3 rounded-full">
                Medium
              </span>
            </div>

            {/* Status - Badge */}
            <div className="flex-shrink-0">
              <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold py-1.5 px-3 rounded-full">
                Open
              </span>
            </div>

            {/* Date - Small fixed width */}
            <div className="w-20 flex-shrink-0 text-right">
              <span className=" text-gray-500">{new Date().getFullYear()}</span>
            </div>

            {/* Actions - Fixed width for buttons */}
            <div className="flex gap-2 flex-shrink-0">
              <button className="bg-blue-50 hover:bg-blue-100 p-2 rounded-lg text-blue-600 transition-colors">
                <TbEdit size={18} />
              </button>
              <button className="bg-red-50 hover:bg-red-100 p-2 rounded-lg text-red-600 transition-colors">
                <HiOutlineTrash size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
