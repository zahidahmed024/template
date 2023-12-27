"use client";

import React from "react";
import Marquee from "react-fast-marquee";

// live stats
export default function TextSlider() {
  return (
    <div className="items-stretch bg-indigo-500 self-stretch flex w-full flex-col justify-center py-px rounded max-md:max-w-full">
      <div className="items-stretch flex gap-0 px-5 py-2.5 max-md:max-w-full max-md:flex-wrap">
        <Marquee>
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
          <MarqueeItem
            text1="AUDCHF"
            text2="0.56708"
            text3="+0.00189"
            text4="(0.33%)"
          />
        </Marquee>
      </div>
    </div>
  );
}

const MarqueeItem = ({ text1 = "", text2 = "", text3 = "", text4 = "" }) => {
  return (
    <div className="flex gap-0 pl-4 pr-1 py-1 border-r-zinc-200 border-r border-solid items-start">
      <div className="self-stretch flex justify-between gap-2 pr-4 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a8c3fbc335b15befd98b066e218b822ec3cc66668c8ccf64f581cdd3130148?apiKey=877f25baca7641bea0898fac94c96e97&"
          className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-base font-bold self-stretch grow whitespace-nowrap">
          {text1}
        </div>
      </div>
      <div className="text-white text-base font-semibold">{text2}</div>
      <div className="items-stretch self-stretch flex justify-between gap-3 pr-2.5">
        <div className="justify-center text-teal-400 text-base font-medium grow whitespace-nowrap">
          {text3}
        </div>
        <div className="justify-center text-teal-400 text-base font-medium grow whitespace-nowrap">
          {text4}
        </div>
      </div>
    </div>
  );
};
