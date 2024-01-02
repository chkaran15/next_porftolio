"use client";

import React, { useState } from "react";
import Navbar from "../navbar/nav-bar";
import { TopHeader } from "../common/top-header";
import { RecoilRoot } from "recoil";

function Provider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <RecoilRoot>
      <div
        className={`font-rem ${
          !open ? "" : "bg-gray-300"
        } flex flex-col gap-12`}
      >
        {/* <Navbar open={open} setOpen={setOpen} /> */}
        <TopHeader />
        {open ? "" : children}
      </div>
    </RecoilRoot>
  );
}

export default Provider;
