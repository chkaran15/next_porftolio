"use client";
import Image from "next/image";
import InfoCard from "./info-card";
import data from "@/utils/header-data";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ImageSection() {
  const containerRef = useRef<any>(null);
  const photoRef = useRef<any>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=700",
          scrub: 0.5,
          // markers: true,
        },
      });

      tl.to(photoRef.current, {
        y: "0%",
        duration: 1.5,
        startAt: { y: "30%", duration: 1.5 },
      });
    },
    { scope: containerRef.current }
  );

  return (
    <div
      ref={containerRef}
      className=" relative w-[280px] h-[280px] mx-[40px] md:mx-[100px] md:w-[495px] md:h-[495px]"
    >
      <div className="student relative w-[280px] h-[280px] md:w-[495px] md:h-[495px] flex justify-center rounded-[50%] overflow-hidden bg-voilet z-10">
        <Image
          ref={photoRef}
          src={"/header/student.png"}
          width={366}
          height={432}
          alt="student"
          quality={100}
          className="absolute bottom-0 w-auto h-auto"
        />
      </div>
      <div className="image-card-container w-[280px] h-[280px] md:w-[495px] md:h-[495px] absolute rounded-[50%] -top-4 -left-4 border-2 border-voilet "></div>{" "}
      <InfoCard
        type={"row"}
        item={data[0]}
        position={"top-[30%] -left-[15%]"}
      />
      <InfoCard type={"col"} item={data[1]} position={"top-0 right-0 "} />
      <InfoCard type={"row"} item={data[2]} position={"bottom-0 right-1 "} />
    </div>
  );
}

export default ImageSection;
