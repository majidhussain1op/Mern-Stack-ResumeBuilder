import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar - fixed width */}
      <SideBar />

      {/* Main Content - takes remaining width */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Outlet /> {/* This renders the current page */}
      </div>
    </div>
  );
};

export default Layout;
