import { GsapMagnatic } from "@/components/common/gasp-magnatic";
import Link from "next/link";
import React from "react";

export default function Blog() {
  return (
    <main className="blog-page-wrapper h-[100dvh] flex justify-center items-center">
      <div className="magnetic-container flex gap-10">
        <Link
          href={"/"}
          className="relative overflow-hidden bg-blue-500 px-10 py-3 rounded-[40px] text-white"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)",
          }}
        >
          <GsapMagnatic>
            <h1 className="text-3xl cursor-pointer relative z-[1]">Button</h1>
          </GsapMagnatic>
        </Link>
      </div>
    </main>
  );
}
