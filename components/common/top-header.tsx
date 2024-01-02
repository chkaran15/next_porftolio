"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { GsapMagnatic } from "./gasp-magnatic";
import NavHeader from "./nav-header";
import BurgerMenu from "./burger-menu";

export const TopHeader = () => {
  return (
    <>
      <BurgerMenu  />
      <NavHeader />
    </>
  );
};
