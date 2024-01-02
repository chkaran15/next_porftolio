import Link from "next/link";
import ProgramCard from "./program-card";
import { project_data } from "@/utils/Data/projectData";

export default function Programs() {
  return (
    <section id="projects" className="programs-container w-full px-4 md:px-[20px] lg:px-[120px] py-10 flex flex-col  overflow-hidden gap-5">
      <div className="programs-wraper w-full flex flex-col  gap-5">
        <div className="program-title flex flex-col gap-3">
          <h3 className="font-normal text-voilet ">Explore Projects</h3>
          <h1 className="font-semibold text-4xl text-[#101828] -tracking-[0.72px]">
            Most Popular Projects
          </h1>
        </div>
        <p className="font-normal text-[20px] text-gray-text">
          Explore our renowned projects—a wealth of invaluable knowledge and
          impactful experiences await your discovery.
        </p>
      </div>

      <div className="programs-list w-full flex gap-6 flex-wrap justify-center ">
        {project_data?.map((item, index) => (
          <>{index < 3 && <ProgramCard key={index} item={item} />}</>
        ))}
      </div>
      <div className="flex mt-10 justify-center items-center">
        <Link
          href="/work"
          className="px-6 py-2 bg-voilet text-white rounded-[20px]"
        >
          See more Works
        </Link>
      </div>
    </section>
  );
}
