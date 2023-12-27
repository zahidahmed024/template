"use client";

import React from "react";

export default function CountItem({
  countValue = 0,
  countText = "",
  isLast = false,
}) {
  return (
    <>
      <div className="items-stretch self-stretch flex justify-between gap-2.5">
        <div className="text-white text-4xl font-medium leading-[62px] grow whitespace-nowrap">
          {countValue}
        </div>
        <div className="text-white text-sm leading-5 self-center my-auto whitespace-pre-line">
          {countText}
        </div>
      </div>
      {
        (isLast = false && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d87001ebfc2c52e255e7f91fc87c738003e870b8b93bf16abd32cd302542fca9?apiKey=877f25baca7641bea0898fac94c96e97&"
            className="aspect-[0.39] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full my-auto"
          />
        ))
      }
    </>
  );
}
