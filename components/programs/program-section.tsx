import data from "../../utils/Data/program-data";
import ProgramCard from "./program-card";

export default function Programs() {
  return (
    <section className="programs-container w-full px-4 md:px-[20px] lg:px-[120px] py-10 flex flex-col  overflow-hidden gap-5">
      <div className="programs-wraper w-full flex flex-col  gap-5">
        <div className="program-title flex flex-col gap-3">
          <h3 className="font-normal text-voilet ">Explore Programs</h3>
          <h1 className="font-semibold text-4xl text-[#101828] -tracking-[0.72px]">Our Most Popular Class</h1>
        </div>
        <p className="font-normal text-[20px] text-gray-text">
          Lets join our famous class, the knowldge provided will definitely be
          useful for you.
        </p>
      </div>

      <div className="programs-list w-full flex gap-6 flex-wrap justify-center ">
        {data.map((item, index) => (
          <ProgramCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
