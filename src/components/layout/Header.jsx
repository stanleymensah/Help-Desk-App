import { AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import helpdeskLogo from "../../assets/icons/helpdesk.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-14 bg-primary text-white text-sm px-6 py-8 flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <div className="brand flex gap-1 w-2/10">
          <img src={helpdeskLogo} alt="logo" className="w-7" />
          <Link to='/'>
          <h1 className="text-xl uppercase font-bold">HelpDesk</h1>
          </Link>
        </div>

        <div className="search w-5/10 justify-between flex border py-2 px-4 items-center rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none ring-0 border-none focus:ring-0 focus:outline-none focus:border-transparent active:border-none w-full"
          />
          <CiSearch />
        </div>

        <div className="user w-2/10 flex gap-2 items-center justify-end text-xs">
          <span className="userName">
            Welcome, <strong>John</strong>
          </span>
          <div className="bg-accent p-2 rounded-full">
            <Link to="/profile">
              {/* <img src="#" alt="user profile" /> */}
              <AiOutlineUser size={20} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
