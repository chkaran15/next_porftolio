"use client";
import Image from "next/image";

import { useState } from "react";

export default function ServiceCard({ data }: any) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`service-item w-[373px] flex flex-col  px-[30px] py-7 rounded-xl gap-[30px] shadow-md ${
          active ? "bg-voilet " : "bg-[#FFFFFF] h-[248px] "
        } `}
        key={data?.id}
      >
        <div className="service-title flex gap-[20px] ">
          <Image
            src={data?.imageUrl}
            alt={data?.title}
            height={48}
            width={48}
            className="service-icon rounded-[12px]"
          />

          <h1
            className={`service-title font-[700] py-1.5 text-[24px]  trackling-[2%] leading-[36px]  ${
              active ? "text-[#FFFFFF]" : "text-black"
            }`}
          >
            {data?.title}
          </h1>
        </div>
        <p
          className={`service-description text-[16px] w-72   overflow-hidden font-[400] leading-[28.8px]  ${
            active ? "text-[#FFFFFF] " : "text-[#646464]  "
          }`}
        >
          {data?.description}
        </p>

        <div
          className={`service-btn flex gap-[21px] w-[127px] h-[25px] hover:cursor-pointer ${
            active ? "text-[#FFFFFF]" : "text-voilet"
          }`}
          onClick={(e) => setActive(!active)}
        >
          <h3 className=" text-[18px] font-[500] leading-[25.2px] tackling-[2%] text-center">
            {!active ? "Learn More" : "See less"}
          </h3>
          <h3 className="w-[5px] h-[10px] font-semiboold">&rsaquo;</h3>
        </div>
      </div>
    </>
  );
}
