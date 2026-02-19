import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";

export default function Dashboard() {
  return (
    <>
    <Header />
    <main className="flex h-lvh">
        <div className="left w-4/10">
        <Sidebar />
        </div>

        <div className="right w-6/10">
        Rest
        </div>

    </main>
    <Footer />
    </>
  )
}
