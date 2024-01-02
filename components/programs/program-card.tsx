import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { GrStar } from "react-icons/gr";

export default function ProgramCard({ item }: any) {
  return (
    <div className="py-10">
      <div
        className="program-card hover:scale-105 hover:transition ease-in hover:duration-500  w-[384px] max-h-[550px] p-6 flex flex-col gap-8 rounded-lg"
        style={{ boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="program-image relative overflow-hidden rounded-md">
          <Image
            src={item?.imageUrl}
            width={336}
            height={300}
            alt={item?.title}
            quality={100}
            className=" h-[300px] object-cover "
          />
        </div>
        <div className="program-content flex flex-col ">
          <div className="progrm-info flex flex-col gap-3">
            <h2 className="text-sm text-voilet  font-semibold ">Web Design</h2>
            <div className="w-full flex gap-4 justify-between ">
              <h1 className="text-2xl font-semibold ">{item?.title}</h1>
              <Link href={item?.url} target="_blank">
                <FiArrowUpRight className="w-6 h-6 mt-1" />
              </Link>
            </div>
            <p className="program-description font-normal text-gray-text">
              {item?.description}
            </p>
            <div className="program-rating flex gap-2">
              <h3 className="text-voilet text-sm font-normal">
                {item?.rating?.rate}
              </h3>
              <div className="rating-stars flex gap-0.5 mt-0.5 ">
                <GrStar className="w-4 h-4 text-yellow" />
              </div>
              <h3 className="text-[#969696] text-sm font-normal">
                &#40;{item?.rating?.reviews}&#41;
              </h3>
            </div>

            <div className="program-user flex justify-between">
              <div className="program-user-info flex gap-3">
                <Image
                  src={item?.user?.imageUrl}
                  width={65}
                  height={65}
                  alt={item?.user?.name}
                  className="rounded-[50%]"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="font-[500] text-[#101828] text-sm">
                    {item?.user?.name}
                  </h2>
                  <h3 className="font-normal text-gray-text text-sm">
                    {item?.user?.date}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
