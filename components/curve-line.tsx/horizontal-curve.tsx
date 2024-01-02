import { menuState } from "@/atoms/menu-atom/menu-state";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

function HorizontalCurve() {
  const [isActive, setIsActive] = useRecoilState(menuState);
  const pathRef = useRef<SVGPathElement>(null);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  const initialPath = `M100 0 L100 ${windowHeight} Q100 ${
    windowHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${windowHeight} Q-150 ${
    windowHeight / 2
  } 100 0`;

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <svg className="horizontal-curve absolute top-0 left-[-99px] w-[150px] h-screen min-h-[100vh] fill-[rgb(41_41_41)] stroke-none">
      <path ref={pathRef} d={isActive ? initialPath : targetPath} />
    </svg>
  );
}

export default HorizontalCurve;
