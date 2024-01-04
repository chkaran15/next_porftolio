"use client";
import React, { useState } from "react";
import { RecoilRoot } from "recoil";
import { TopHeader } from "../common/top-header";
import Cursor from "../sticky-cursor";

function Provider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false); // Define the type for 'open'

  return (
    <RecoilRoot>
      <div
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
