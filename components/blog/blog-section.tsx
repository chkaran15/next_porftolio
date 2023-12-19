import Image from "next/image";
import BlogCard from "./blog-card";
import data from "../../utils/Data/blog-data"
export default function Blog() {
  return (
    <section id="blogs" className="blog-container w-full px-1 sm:px-3 lg:px-[35px] xl:px-[120px] flex flex-col overflow-hidden gap-8 pb-3">
      <h1 className="blog-title text-2xl font-semibold  ">Our recent blogs</h1>
      <div className="w-full px-1 flex flex-col lg:flex-row md:flex-col py-4 gap-6">
        <div className="flex flex-col gap-8">
          <BlogCard type="row" data={data[0]} />
          <BlogCard type="row" data={data[1]} />
        </div>
        <BlogCard type="col" data={data[2]}/> 
      </div>
      <div className="w-full flex justify-center">
        <button className="px-10 py-[2px] bg-[#EEF4FF] text-[#6941C6] rounded-[20px] hover:bg-voilet hover:text-white">
          See More
        </button>
      </div>
    </section>
  );
}
