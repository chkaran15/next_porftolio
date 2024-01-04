import { LandingSection } from "@/components/common/landing-section";
import TransistionAnimation from "@/components/service/transistion";
import React from "react";

export default function About() {
  return (
    <>
      <TransistionAnimation title={"about"} />

      <LandingSection />
      {/* <div
        className=" bg-transparent h-[20vh] mt-[-19vh] z-[10] "
        style={{
          background:
            "linear-gradient(180deg, rgba(243,241,244,1) 0%, rgba(35,54,35,1) 86%)",
        }}
      ></div> */}
      <div className="h-[100vh]"></div>
    </>
  );
}
