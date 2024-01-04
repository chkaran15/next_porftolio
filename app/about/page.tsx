import { LandingSection } from "@/components/common/landing-section";
import TransistionAnimation from "@/components/service/transistion";
import React from "react";

export default function About() {
  return (
    <>
      <TransistionAnimation title={"about"} />

      <LandingSection />
      <div className="h-[100vh]"></div>
    </>
  );
}
