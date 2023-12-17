import React from "react";
import ImageSection from "./image-card";
import { RiSpeakFill } from "react-icons/ri";
import { ImBriefcase } from "react-icons/im";
import { HiOutlineLightBulb } from "react-icons/hi";

function Header() {
  return (
    <section className="programs-container w-full px-4 md:px-[20px] lg:px-[120px] py-10  overflow-hidden gap-5">
      <div className="header-wrapper flex flex-col xl:flex-row  ">
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-5 header-title">
            <h1 className="text-4xl md:text-6xl font-bold -trackling-[0.5px] capitalize">
              Up Your <span className="text-color text-voilet">Skills</span> To{" "}
              <span className="text-color text-voilet">Advance</span> Your{" "}
              <span className="text-color text-voilet">Career</span>Path
            </h1>
            <p>
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
            <div className="header-buttons flex gap-3 md:gap-7 mt-3">
              <button className="px-3 md:px-7 py-4 text-[18px] font-semibold text-white bg-voilet rounded-lg border-1 border-[#F4EBFF] shadow-[0_1_2_0_rgba(16,24,40,0.05)]">
                Get Started
              </button>
              <button className="px-3 md:px-7 py-4 text-[18px] font-semibold text-voilet bg-[#F4EBFF] rounded-lg border-1 border-[#F4EBFF] shadow-[0_1_2_0_rgba(16,24,40,0.05)]">
                Get free trial
              </button>
            </div>
          </div>

          <div className="focus-goal w-full flex flex-wrap my-10 gap-8">
            <div className="flex">
              <RiSpeakFill className="w-7 h-7 text-[#F1BF5A] shrink-0" />
              <h3 className="ml-1 mt-[2px] text-base font-normal text-gray-text">
                Public Speaking
              </h3>
            </div>
            <div className="flex">
              <ImBriefcase className="w-7 h-7 text-[#F4876B] shrink-0" />
              <h3 className="ml-1 mt-[2px] text-base font-normal text-gray-text">
                Career-Oriented
              </h3>
            </div>
            <div className="flex">
              <HiOutlineLightBulb className="w-7 h-7 text-[#B4708D] shrink-0" />
              <h3 className="ml-1 mt-[2px] text-base font-normal text-gray-text">
                Creative Thinking
              </h3>
            </div>
          </div>
        </div>

        <ImageSection />
      </div>
    </section>
  );
}

export default Header;
