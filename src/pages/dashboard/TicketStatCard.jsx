export default function TicketStatCard({ title, number, icon }) {
  return (
    <>
      <div className="border border-gray-300 w-40 h-27 rounded-lg p-2 flex flex-col gap-2">
        <div className="top flex gap-1 items-center">
          <span className="bg-green-200 p-1 rounded-sm">{icon}</span>
          <span className="font-semibold">{title}</span>
        </div>
        <div className=" flex items-center p-1">
          <span className="font-semibold text-3xl">{number}</span>
        </div>
        <div className="border-t border-dashed border-gray-300"></div>
      </div>
    </>
  );
}
