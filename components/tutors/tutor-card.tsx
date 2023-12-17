import Image from "next/image";
import Link from "next/link";
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

export default function TutorCard({item}:any) {
    return (
        <div className="tutor-card w-[276px] h-[340px] p-6 flex flex-col gap-5 bg-[#eceff1] rounded">
            <div className="w-full flex justify-center">
                <Image 
                    src={item?.image_url}
                    width={80}
                    height={80}
                    alt={item?.name}
                />
            </div>

            <div className="tutor-info flex flex-col gap-4">
                <div className="tutor-details ">
                        <h1 className="tutor-name text-lg font-medium text-center text-[#101828] ">{item?.name}</h1>
                        <h2 className="tutor-position text-base font-normal h-[48px] text-center text-voilet my-[2px] ">{item?.position}</h2>
                        <p className="tutor-description w-full h-[88px] text-base font-normal text-center  text-gray-text">{item?.description}</p>
                        
                </div>

                <div className="w-full flex justify-center gap-4">
                    <Link href={`${item?.twitter_url}`} target="_blank" className="text-[#98A2B3] hover:text-voilet"> <BsTwitter /> </Link>
                    <Link href={`${item?.linkedIn_url}`} target="_blank" className="text-[#98A2B3] hover:text-voilet">  <BsLinkedin  /> </Link>
                </div>
            </div>
        </div>
    )
}