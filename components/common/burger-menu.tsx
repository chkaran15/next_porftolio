import React from "react";
import { twMerge } from "tailwind-merge";
import { GsapMagnatic } from "./gasp-magnatic";

function BurgerMenu({
  setIsActive,
  isActive,
}: {
  setIsActive: any;
  isActive: any;
}) {
  return (
    <>
      <GsapMagnatic>
        <div
          className={twMerge(
            " header-wrapper z-[99] bg-voilet cursor-pointer fixed  h-20 w-20 rounded-full right-1 top-1 flex flex-col gap-2 justify-center items-center"
          )}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div
            className={twMerge(
              " h-[2px] bg-white w-[40%] transistion duration-300 ease-out ",
              isActive ? "absolute -rotate-[45deg] " : ""
            )}
          ></div>
          <div
            className={twMerge(
              " h-[2px] bg-white w-[40%] transistion duration-300 ease-out",
              isActive ? "absoulte rotate-45" : ""
            )}
          ></div>
        </div>
      </GsapMagnatic>
    </>
  );
}

export default BurgerMenu;
