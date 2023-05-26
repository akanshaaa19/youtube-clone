import { useState } from "react";
import Logo from "../icons/Logo";
import SideBarExpanded from "./SideBarExpanded";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center px-4 h-14">
        <div className="start flex items-center">
          <div
            className="p-4 cursor-pointer"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>
          {showSideBar && <SideBarExpanded setShowSideBar={setShowSideBar} />}
          <Link to="/">
            <div className="flex items-center px-4">
              <Logo />
            </div>
          </Link>
        </div>
            <Search />
        <div className="end flex items-center">
          <div className="h-8 w-8 flex items-center justify-center rounded-full p-2 mr-4">
            <i className="fa-solid fa-video text-2xl"></i>
          </div>
          <div className="h-8 w-8 flex items-center justify-center rounded-full p-2 mr-4">
            <i className="fa-regular fa-bell text-2xl"></i>
          </div>
          <div className="h-8 w-8 rounded-full bg-green-700 flex items-center justify-center">
            A
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
