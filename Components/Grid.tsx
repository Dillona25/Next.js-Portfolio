import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data/data";

export const Grid = () => {
  return (
    <section id="about" className="pt-14 md:pt-20 md:pb-36">
      <div className="flex items-center relative text-center font-bold text-[40px] leading-[40px] md:text-5xl lg:text-6xl pb-5 sm:pb-10">
        <h1 className="whitespace-nowrap">About me</h1>
        <span className="text-purple">.</span>
        <span className="border-[#797979] ml-4 border-[1px] w-full"></span>
      </div>
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};
