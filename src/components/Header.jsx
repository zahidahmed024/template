import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

export default function Header() {
  return (
    <div className="bg-slate-950 self-stretch flex w-full flex-col items-stretch pl-20 pr-16 py-11 max-md:max-w-full max-md:px-5">
      <Navbar />
      <HeroSection />
    </div>
  );
}
