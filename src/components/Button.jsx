"use client";
import React from "react";

export default function Button({ text = "" }) {
  return (
    <div
      role="button"
      className="text-white text-right text-base font-semibold leading-6 w-fit justify-center  bg-indigo-500 hover:bg-indigo-400  px-4 py-3 rounded-xl"
    >
      {text}
    </div>
  );
}
