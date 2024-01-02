"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export const GsapMagnatic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const mouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const { width, height, top, left } =
        ref.current?.getBoundingClientRect() as DOMRect;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e: any) => {
      xTo(0);
      yTo(0);
    };

    ref.current?.addEventListener("mousemove", mouseMove);
    ref.current?.addEventListener("mouseleave", mouseLeave);

    return () => {
      ref.current?.addEventListener("mousemove", mouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current?.addEventListener("mouseleave", mouseLeave);
    };
  }, []);
  return React.cloneElement(children as React.ReactElement, {
    ref,
  });
};
