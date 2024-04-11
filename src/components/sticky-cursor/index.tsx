"use client";
import { menuState } from "@/atoms/menu-state";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { twMerge } from "tailwind-merge";

export default function Cursor() {
  const [isActive, setIsActive] = useRecoilState(menuState);
  const cursorRef = useRef<any>(null);

  useGSAP(() => {
    const links = document.querySelectorAll("a");

    const onMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
      });
    };

    const onMouseEnterLink = (e: any) => {
      const link = e.target;
      if (link.classList.contains("view")) {
        gsap.to(cursorRef.current, {
          scale: 3,
          mixBlendMode: "difference", // Corrected typo: mixblendmode -> mixBlendMode
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 3,
          mixBlendMode: "difference", // Corrected typo: mixblendmode -> mixBlendMode
        });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink); // Corrected event: mouseenter -> mouseleave
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, {});

  return (
    <div
      ref={cursorRef}
      className={twMerge(
        "cursor z-[1111] fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none mix-blend-difference p-2 hidden lg:flex justify-center items-center",
        isActive ? "bg-white" : "bg-violet-700"
      )}
    ></div>
  );
}
