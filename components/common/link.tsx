import Link from "next/link";
import React from "react";

function Links({ item }: { item: any }) {
  return (
    <>
      <Link href={item?.url} className="nav-link text-3xl font-semibold">
        {item?.name}
      </Link>
    </>
  );
}

export default Links;
