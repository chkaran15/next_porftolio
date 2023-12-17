import Image from "next/image";
import InfoCard from "./info-card";
import data from "../../utils/Data/header-data";
import { FaLaptopCode } from "react-icons/fa";

function ImageSection() {
  return (
    <div className=" relative w-[280px] h-[280px] mx-[40px] md:mx-[100px] md:w-[495px] md:h-[495px]">
      <div className="student relative w-[280px] h-[280px] md:w-[495px] md:h-[495px] flex justify-center rounded-[50%] overflow-hidden bg-voilet z-10">
        <Image
          src={"/header/student.png"}
          width={366}
          height={432}
          alt="student"
          quality={100}
          className="absolute bottom-0 "
        />
      </div>

      <div className="image-card-container w-[280px] h-[280px] md:w-[495px] md:h-[495px] absolute rounded-[50%] -top-4 -left-4 border-2 border-voilet "></div>

      <InfoCard
        type={"row"}
        item={data[0]}
        position={"top-[30%] -left-[15%] "}
      />
      <InfoCard type={"col"} item={data[1]} position={"top-0 right-0 "} />
      <InfoCard type={"row"} item={data[2]} position={"bottom-0 right-1 "} />
    </div>
  );
}

export default ImageSection;
