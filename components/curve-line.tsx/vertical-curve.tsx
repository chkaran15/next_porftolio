"use client";
import { menuState } from "@/atoms/menu-atom/menu-state";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

function VerticalCurve() {
  const [isActive, setIsActive] = useRecoilState(menuState);
  const pathRef = useRef<SVGPathElement>(null);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const initialPath = `M0,0 Q${windowWidth / 2},350 ${windowWidth},0`;
  const targetPath = `M0,0 Q${windowWidth / 2},0 ${windowWidth},0`;

  useEffect(() => {
    if (pathRef.current) {
      if (isActive) {
        gsap.to(pathRef.current, {
          attr: { d: targetPath },
          duration: 1, // Set your desired duration
          ease: "expoScale(0.5,7,power1.inOut)",
        });
      } else {
        gsap.to(pathRef.current, {
          attr: { d: initialPath },
          duration: 1, // Set your desired duration
          ease: "expoScale(0.5,7,power1.inOut)",
        });
      }
    }
  }, [initialPath, isActive, targetPath]);

  return (
    <svg className="horizontal-curve absolute bottom-[-200px] w-full h-[200px]   ">
      <path ref={pathRef} fill="black" />
    </svg>
  );
}

export default VerticalCurve;
