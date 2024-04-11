"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { LandingHeading } from "../ui/landing-heading";
import { useGSAP } from "@gsap/react";

export const LandingSection = () => {
  const landingRef = useRef<any>(null);
  const mountain1Ref = useRef<any>(null);
  const mountain2Ref = useRef<any>(null);
  const mountain3Ref = useRef<any>(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: landingRef.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: 0.3,
        },
      });
      tl.to(
        mountain1Ref.current,
        {
          yPercent: -20,
          // duration: 1,
          ease: "power2.in",
        },
        0
      );

      tl.to(
        mountain2Ref.current,
        {
          yPercent: -40,
          // duration: 1.4,
          // startAt: { y: "30%" },
          ease: "power2.in",
        },
        0
      );
      tl.to(
        mountain3Ref.current,
        {
          yPercent: -70,
          // duration: 1,
          // startAt: { y: "50%" },
          ease: "power2.in",
        },
        0
      );
    },
    { scope: landingRef.current }
  );

  return (
    <>
      <div
        ref={landingRef}
        className={twMerge(
          "w-full h-[100vh] min-h[100dvh]  relative overflow-hidden bg-gradient-to-b from-transparent to-black"
        )}
      >
        <div className="Image-section absolute  w-full h-full">
          {" "}
          <Image
            priority
            src={`/landing/sky.png`}
            alt={"image"}
            fill
            className="absolute object-cover"
            quality={100}
          />
        </div>
        <div
          ref={mountain1Ref}
          className="Image-section z-[1] absolute transform translate-y-[20%] w-full h-full"
        >
          {" "}
          <Image
            priority
            src={`/landing/mountain3.png`}
            alt={"image"}
            fill
            className="absolute object-cover"
            quality={100}
          />
        </div>
        <div
          ref={mountain2Ref}
          className="Image-section  absolute left-0 transform translate-y-[30%]  z-[2]  w-full h-full"
        >
          <div className="relative w-full h-full transform lg:translate-x-[-10%]">
            {" "}
            <Image
              priority
              src={`/landing/mountain2.png`}
              alt={"image"}
              fill
              className="absolute object-cover md:object-contain"
              quality={100}
            />
          </div>
        </div>

        <LandingHeading />

        <div
          ref={mountain3Ref}
          className="Image-section opacity-1 absolute right-0 transform translate-y-[50%] z-[5]  w-full h-screen "
        >
          {" "}
          <Image
            priority
            src={`/landing/mountain1.png`}
            alt={"image"}
            fill
            className="absolute object-cover z-[4] bg-gradient-to-b from-transparent to-black"
            quality={100}
          />
          <div className="absolute w-full md:w-[50%] h-[50vh] md:h-[50vh] transform translate-y-[35%] md:translate-y-[50%]  translate-x-[-10%] ">
            <Image
              priority
              src={`/landing/person.png`}
              alt={"image"}
              fill
              className="absolute bottom-0 object-contain "
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
