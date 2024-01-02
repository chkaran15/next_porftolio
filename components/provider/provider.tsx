"use client";

import React, { useState } from "react";
import Navbar from "../navbar/nav-bar";

function Provider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`font-rem ${!open ? "" : "bg-gray-300"} flex flex-col gap-12`}
    >
      {/* <Navbar open={open} setOpen={setOpen} /> */}
      {open ? "" : children}
    </div>
  );
}

export default Provider;
