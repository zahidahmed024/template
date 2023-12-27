import HeroSection from "@/components/HeroSection";
import InfoSection1 from "@/components/InfoSection1";
import InfoSection2 from "@/components/InfoSection2";
import TextSlider from "@/components/TextSlider";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TextSlider />
      <InfoSection1 />
      <InfoSection2 />
    </>
  );
}
