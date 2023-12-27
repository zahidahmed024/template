"use client";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex w-full justify-between gap-5 ml-3.5 pr-7 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
      <div className="items-stretch flex justify-between gap-5 mt-5">
        <MenuItem text="Home" />
        <MenuItem text="Model" dropDownMenu={[{ text: "option1" }]} />
        <MenuItem text="Be a Partner" dropDownMenu={[{ text: "option1" }]} />
        <MenuItem text="More" dropDownMenu={[{ text: "option1" }]} />
      </div>
      <div className="self-stretch flex items-center justify-between gap-5">
        <MenuItem text="Login" />
        {/* 
        <div className="text-white text-base font-medium leading-6 my-auto">
          Login
        </div> */}
        <Button text="Join Our Discord" />
      </div>
    </nav>
  );
}
const MenuItem = ({ text = "", dropDownMenu = [] }) => {
  return (
    <div className="group relative cursor-pointer flex items-center">
      <div className="text-white text-base font-medium leading-6 grow whitespace-nowrap">
        {text}
      </div>

      {dropDownMenu?.length > 0 && (
        <>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23af5743255ea7151565bec537b10b9d12dbafcad318ce23683c858ffffa09f6?apiKey=877f25baca7641bea0898fac94c96e97&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full ml-2"
          />
          <ul className="invisible group-hover:visible absolute right-0 top-full mt-2 space-y-2 bg-white border rounded-md shadow-md">
            {dropDownMenu?.map((item) => () => {
              <li className="px-4 py-2 flex items-center">
                {item?.text}
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/23af5743255ea7151565bec537b10b9d12dbafcad318ce23683c858ffffa09f6?apiKey=877f25baca7641bea0898fac94c96e97&"
                  className="ml-2 h-4 w-4"
                  alt="down arrow"
                /> */}
              </li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
