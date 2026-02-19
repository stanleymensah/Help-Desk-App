import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex h-lvh">
        <div className="left w-2/10">
          <Sidebar />
        </div>

        <div className="right w-8/10 p-3">
            <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}
