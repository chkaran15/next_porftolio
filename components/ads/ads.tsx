"use client"
import Image from "next/image";
import data from "../../utils/Data/ads";
import { useEffect, useState, useRef } from "react";

function Ads() {
  const [count, setCount] = useState<number>(0);
  const scrollXRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to perform scrolling
  function scrollElement() {
    const scrollx = scrollXRef.current;

    // Check if the element exists before trying to access its properties
    if (scrollx) {
      // Increment the scrollLeft property with a constant speed
      scrollx.scrollLeft += 10; // Adjust the value to control the speed

      // Check if the scroll position has reached the end
      if (scrollx.scrollLeft >= scrollx.scrollWidth - scrollx.clientWidth) {
        // If it reached the end, reset scrollLeft to 0 to start scrolling from the beginning
        scrollx.scrollLeft = 0;
      }
    }
  }

  function increaseCount() {
    if (count < 250) {
      setCount(count + 1);
    } else {
      return;
    }
  }

  useEffect(() => {
    // Start the scrolling loop with an interval of 300 milliseconds (adjust as needed)
    intervalRef.current = setInterval(scrollElement, 150);

    // Clean up the interval when the component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const countInterval = setTimeout(increaseCount, 20);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(countInterval);
  }, [count]); // Run the effect whenever the 'count' state changes

  return (
    <section className="ads-container w-full px-4 md:px-[20px] lg:px-[120px] py-5 flex flex-col md:flex-row overflow-hidden gap-[55px]  ">
      <div className="">
        <h1 className="text-voilet text-[30px] font-bold">{count}+</h1>
        <p className="text-[25px] font-[300]">Collaboration</p>
      </div>
      <div
        ref={scrollXRef}
        className="ads w-full min-w-[320px] lg:w-[1200px] flex overflow-x-scroll mt-0 md:mt-5 gap-[50px] md:gap-[100px] lg:gap-[200px] no-scrollbar mx-2"
      >
        {data.map((item, i) => (
          <Image
            src={item?.image}
            width={200}
            height={30}
            
            alt={item?.image || ""}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Ads;
