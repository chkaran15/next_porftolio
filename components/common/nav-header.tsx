"use client";
import { navData } from "@/utils/Data/nav-data";
import React, { useEffect, useRef } from "react";
import Links from "./link";
import gsap from "gsap";

function NavHeader({ isActive }: { isActive: any }) {
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isActive) {
      gsap.to(navRef.current, {
        width: "100%",
        duration: 1,
        ease: "expoScale(0.5,7,power1.inOut)",
      });
    } else {
      gsap.to(navRef.current, {
        width: "0%",
        duration: 1,
        ease: "expoScale(0.5,7,power1.inOut)",
      });
    }
  }, [isActive]);

  return (
    <div
      ref={navRef}
      className="navbar-wrapper z-10 fixed h-[100dvh] w-[0%] right-0  bg-[rgb(41_41_41)] text-white"
    >
      <nav className="nav-wrapper flex justify-center items-center h-full ">
        <div className="flex flex-col gap-6">
          {navData?.map((item, index) => (
            <React.Fragment key={index}>
              <Links item={item} />
            </React.Fragment>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default NavHeader;
