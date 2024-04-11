"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function ScaleVideoSection() {

  return (
    <div className="h-screen border-2 border-violet">
      <video
      
        className="w-full h-full object-cover"
        autoPlay
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dftgrb9fb/video/upload/v1696534014/video_2160p_ix2a9g.mp4" />
      </video>
    </div>
  );
}
