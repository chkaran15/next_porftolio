import Link from "next/link";
import React from "react";

export interface Type {
  item: {
    title: string;
    links_name: string[];
    links_url: string[];
  };
}

function FooterCard({ item }: Type) {
  return <div className="link-container flex flex-col gap-4">
    <h3 className="link-title text-[#98A2B3] font-semibold text-sm  ">{item?.title}</h3>
    <ul className="link-name text-[#EAECF0] font-medium text-base ">
        {
            item?.links_name?.map((link,i)=>
            <li key={i}>
                <Link href={item?.links_url[i]} target="_blank">{link}</Link>
            </li>
            ) 
        }
    </ul>
  </div>;
}

export default FooterCard;
