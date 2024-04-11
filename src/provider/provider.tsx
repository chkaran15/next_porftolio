"use client";
import { TopHeader } from "@/components/common/top-header";
import Cursor from "@/components/sticky-cursor";
import React, { useRef, useState } from "react";
import { RecoilRoot } from "recoil";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function Provider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false); // Define the type for 'open'
  const ref = useRef(null);

  return (
    <RecoilRoot>
      <div
        ref={ref}
        data-scroll-container
        className={`font-rem ${open ? "bg-gray-300" : ""} flex flex-col gap-12`}
      >
        <Cursor />
        <TopHeader />
        {!open && children}
      </div>
    </RecoilRoot>
  );
}

export default Provider;
