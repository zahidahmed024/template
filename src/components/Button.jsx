"use client";
import Image from "next/image";
import React from "react";
export default function Button({ text = "", rightIcon = "", ...props }) {
  return (
    <button
      className=" flex flex-row items-center text-white  text-base whitespace-nowrap font-semibold leading-6 w-fit justify-center  bg-indigo-500 hover:bg-indigo-400  px-4 py-3 rounded-xl"
      {...props}
    >
      {text}
      {
        rightIcon && (
          <Image
            src={rightIcon}
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full ml-2"
          />
        )
      }
    </button>
  );
}
