import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const ColumnImage = ({ images }: { images: any }) => {
    return (
      <div className={twMerge("column w-full flex flex-col gap-4")}>
        {images?.map((image: any, index: number) => (
          <div
            key={index}
            className="image-container relative  h-[300px] overflow-hidden rounded"
          >
            <Image
              src={image?.url}
              fill
              alt={image?.alt}
              className="absolute object-cover"
              quality={100}
            />
          </div>
        ))}
      </div>
    );
  };
  