"use client";
import { navData } from "@/utils/Data/nav-data";
import React, { RefObject, useEffect, useRef } from "react";
import Links from "./link";
import gsap from "gsap";
import HorizontalCurve from "../curve-line.tsx/horizontal-curve";
import { useRecoilState } from "recoil";
import { menuState } from "@/atoms/menu-atom/menu-state";

function NavHeader() {
  const [isActive, setIsActive] = useRecoilState(menuState);
  const navRef = useRef<HTMLDivElement>(null);

  const linkRefs = Array.from({ length: navData.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<any>(null)
  );

  useEffect(() => {
    if (isActive) {
      gsap.to(navRef.current, {
        width: "100%",
        duration: 1,
        ease: "expoScale(0.5,7,power1.inOut)",
      });
      linkRefs.forEach((ref, index) => {
        gsap.to(ref.current, {
          opacity: 1,
          x: 0,
          delay: 0.05 * (index + 1),
          ease: "expoScale(0.5,7,power1.inOut)",
        });
      });
    } else {
      gsap.to(navRef.current, {
        delay: 0.2,
        width: "0%",
        duration: 1,
        ease: "expoScale(0.5,7,power1.inOut)",
      });
      linkRefs.forEach((ref, index) => {
        gsap.to(ref.current, {
          delay: 0.05 * (index + 1),
          ease: "expoScale(0.5,7,power1.inOut)",
          opacity: 0,
          x: 300,
        });
      });
    }
  }, [isActive, linkRefs]);

  return (
    <>
      <div
        ref={navRef}
        className="navbar-wrapper z-[999] fixed min-h-[100dvh] h-[100vh] w-[0%] right-0  bg-[rgb(41_41_41)] text-white"
      >
        <nav className="nav-wrapper flex justify-center items-center h-full ">
          <div className="flex flex-col gap-6">
            {navData?.map((item, index) => (
              <div
                key={index}
                ref={linkRefs[index]}
                className="link-wrapper opacity-0  transform translate-x-[300px] ease-linear duration-75"
              >
                <Links item={item} />
              </div>
            ))}
          </div>
        </nav>
        <HorizontalCurve />
      </div>
    </>
  );
}

export default NavHeader;
