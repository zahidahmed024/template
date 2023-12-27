import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

export default function Header() {
  return (
    <div className="bg-slate-950 self-stretch flex w-full flex-col items-stretch pl-20 pr-16 py-11 max-md:max-w-full max-md:px-5">
      {/* // bg-[linear-gradient(91deg,#3F68FF_0%,#CD63FF_100%)] */}
      <Navbar />
      {/* <HeroSection /> */}
    </div>
  );
}
