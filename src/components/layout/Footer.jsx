import helpdeskLogo from "../../assets/images/helpdesk.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white h-20 flex items-center px-8 ">
      <div className="container flex justify-between items-center">
        <div className="brand flex items-center">
          <img src={helpdeskLogo} alt="logo" className="w-6" />
          <h2 className="uppercase font-bold">Helpdesk</h2>
        </div>

        <span className="text-xs">
          Developed by Stan :)
        </span>

        <div className="others">
          <span className="text-sm">Copyright &copy; HelpDesk {new Date().getFullYear()} &bull; v1.2.0</span>
        </div>
      </div>
    </footer>
  );
}