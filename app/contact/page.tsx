import TransistionAnimation from "@/components/service/transistion";
import React from "react";

export default function Contact() {
  return (
    <>
      <TransistionAnimation title={"Contact"} />
      <div className="flex h-screen min-h-[100dvh] items-center justify-center">
        <h1 className="text-3xl">Contact</h1>
      </div>
    </>
  );
}
