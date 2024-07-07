import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function index() {
  return (
    <div className="flex flex-col items-center min-h-[100dvh]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
