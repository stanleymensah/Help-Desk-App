import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import TicketsPage from "../tickets/TicketsPage";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="flex h-lvh">
        <div className="left w-2/10">
          <Sidebar />
        </div>

        <div className="right w-8/10 p-3">
          <TicketsPage />
        </div>
      </main>
      <Footer />
    </>
  );
}
