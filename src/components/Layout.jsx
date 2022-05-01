import React from "react";
import Navbar from "./Navbar";
import UpcomingList from "./UpcomingList";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen  2xl:max-w-screen-2xl 2xl:mx-auto">
        <div className=" flex-1 py-10  px-5 sm:px-10 ">{children}</div>
        <UpcomingList />
      </div>
    </>
  );
};

export default Layout;
