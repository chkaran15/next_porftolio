"use client";

import Image from "next/image";
import React, { useState } from "react";
import TagCard from "./tag-card";

interface u {
  type: string;
  data:{
    imageurl:string,
    date:string,
    title:string,
    description:string,
    tags:string[],
  }
}

const BlogCard = ({ type,data }: u) => {
  
  return (
    <div
      className={`flex gap-3   ${
        type === "row" ? " flex-col md:flex-row" : " flex-col sm:flex-row md:flex-row lg:flex-col"
      }  `}
    >
      <div className="relative min-w-[320px] w-full sm:w-full h-[240px]  ">
        <Image
          src={data?.imageurl}
          className="student absolute"
          alt="avatar"
          fill
        />
      </div>

      <div className={` w-full ${type === "row" ?  "min-w-[320px] " : "min-w-[320px]"}  `}>
        <h1 className="text-sm font-semibold text-voilet ">
          {data?.date}
        </h1>
        <h2 className="text-lg font-semibold mt-3">
         {data?.title}
        </h2>
        <p className="text-lg font-normal mt-2  text-gray-text">
         {data?.description}
        </p>
        {/* buttons */}
        <div className="mt-6 w-full flex flex-wrap gap-2">
          {(data?.tags).map((tag,i) => (
              <TagCard item={tag} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
