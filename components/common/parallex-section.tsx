"use client";
import React, { useEffect, useRef } from "react";
import { ColumnImage } from "./column-image";
import { images } from "@/utils/Data/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Parallex = () => {
  const containerRef = useRef<any>(null);
  const downRef = useRef<any>(null);
  const upRef = useRef<any>(null);
  const downRef2 = useRef<any>(null);
  const upRef2 = useRef<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "=+1200",
        scrub: 0.5,
      },
    });

    // Animations for upRef
    tl.to(upRef.current, { y: "-35%", duration: 1 }, 0);
    tl.to(upRef2.current, { y: "-35%", duration: 1 }, 0);
    // Animations for  downRef2
    tl.to(
      downRef.current,
      { y: "0%", duration: 1, startAt: { y: "-50%", duration: 1 } },
      0
    );
    tl.to(
      downRef2.current,
      { y: "0%", duration: 1, startAt: { y: "-50%" } },
      0
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="gallery h-[120vh] px-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 bg-black overflow-hidden"
    >
      <div className="" ref={upRef}>
        <ColumnImage images={images.slice(2, 8)} />
      </div>

      <div className="" ref={downRef}>
        <ColumnImage images={images.slice(0, 6)} />
      </div>
      <div className="" ref={upRef2}>
        <ColumnImage images={images.slice(2, 8)} />
      </div>
      <div className="" ref={downRef2}>
        <ColumnImage images={images.slice(6, 12)} />
      </div>
    </div>
  );
};
