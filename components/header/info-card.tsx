import Image from "next/image";
interface Type {
  type: string;
  item: {
    total_number: string;
    title: string;
    image: string;
  },
  position:string
}

function InfoCard({ type, item,position }: Type) {

  return (
    <div
      className={`absolute flex  ${
        type === "row" ? "md:flex-row" : "md:flex-col  "
      } gap-3 justify-center items-center p-2 ${position} border-2 border-voilet rounded-lg z-20 bg-[#F5F5F4]`}
    >


      <Image src={item?.image}  width={72} height={72} alt={item?.title } className="hidden md:block"/>


      <div className={` flex flex-col ${
        type === "row" ? "" : "justify-center items-center"
      }`}>
        <h1 className={`text-[14px] md:text-[25px] font-bold  text-[#101828]`}>
          {item?.total_number}
        </h1>

        <p className={`text-[10px] md:text-[15px] font-normal  text-gray-text`}>{item?.title}</p>
      </div>
    </div>
  );
}

export default InfoCard;
