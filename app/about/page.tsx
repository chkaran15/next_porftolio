import TransistionAnimation from "@/components/service/transistion";
import React from "react";

export default function About() {
  return (
    <>
      <TransistionAnimation title={"about"} />
      <div className="flex h-screen min-h-[100dvh] items-center justify-center">
        <h1 className="text-3xl">About Page</h1>
      </div>
    </>
  );
}
