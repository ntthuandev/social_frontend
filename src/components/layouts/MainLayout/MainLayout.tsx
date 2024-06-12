import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import Bottombar from "./components/Bottombar";
import Topbar from "./components/Topbar";

const MainLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
};

export default MainLayout;
