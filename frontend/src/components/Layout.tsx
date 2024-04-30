import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FooterNew from "./FooterNew";

export default function Layout() {
  return (
    <div className="site-wrapper">
      {<Navbar />}
      {<Outlet />}
      {<FooterNew />}
    </div>
  );
}
