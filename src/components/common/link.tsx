"use client";
import { menuState } from "@/atoms/menu-state";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

function Links({ item }: { item: any }) {
  const [isActive, setIsActive] = useRecoilState(menuState);
  return (
    <>
      <Link
        href={item?.url}
        onClick={() => setIsActive(false)}
        className="nav-link text-3xl font-semibold cursor-none"
      >
        {item?.name}
      </Link>
    </>
  );
}

export default Links;
