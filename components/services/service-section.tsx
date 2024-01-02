import ServiceCard from "./service-card"
import data from "@/utils/Data/service-data"

export default function Services(){
    return (
        <section id="services" className="services-container w-full px-4 md:px-[20px] lg:px-[120px] py-[20px] flex flex-col overflow-hidden gap-[20px] ">

            <div className="services-wraper w-full flex justify-center py-2 ">   
                <div className="w-[734px] flex flex-col gap-1">
                    <h2 className="text-center text-base md:font-semibold text-[#6941C6]">Our Services</h2>
                    <h1 className="text-center text-[36px]  font-bold font-rem  ">Designing engaging, interactive experiences that captivate and delight users.</h1>
                </div>
            </div>

            <div className="service-list w-full flex gap-[40px] flex-wrap justify-center">
            {
                data?.map((item,i)=>(
                    <ServiceCard key={i} data={item}/>
                ))
            }
            </div>
            

        </section>
    )
}