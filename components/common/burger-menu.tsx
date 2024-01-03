"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GsapMagnatic } from "./gasp-magnatic";
import { useRecoilState } from "recoil";
import { menuState } from "@/atoms/menu-atom/menu-state";

function BurgerMenu() {
  const [isActive, setIsActive] = useRecoilState(menuState);
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <>
      <GsapMagnatic>
        <div
          className={twMerge(
            " header-wrapper z-[1000]  fixed  h-20 w-20 transistion transform duration-500 ease-out rounded-full right-1 top-1 flex flex-col gap-2 justify-center items-center",
            mouseOn && !isActive && "bg-voilet",
            mouseOn && isActive && "bg-white",
            !mouseOn && isActive && "bg-transparent"
          )}
          onMouseEnter={() => {
            setMouseOn(true);
          }}
          onMouseLeave={() => {
            setMouseOn(false);
          }}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div
            className={twMerge(
              " h-[2px]  w-[40%] transistion duration-300 ease-out ",
              isActive ? "absolute -rotate-[45deg] bg-black" : "bg-white",
              !mouseOn && !isActive && "bg-black",
              !mouseOn && isActive && "bg-black"
            )}
          ></div>
          <div
            className={twMerge(
              " h-[2px]  w-[40%] transistion duration-300 ease-out",
              isActive ? "absoulte rotate-45 bg-black" : "bg-white",
              !mouseOn && !isActive && "bg-black",
              !mouseOn && isActive && "bg-black"
            )}
          ></div>
        </div>
      </GsapMagnatic>
    </>
  );
}

export default BurgerMenu;
