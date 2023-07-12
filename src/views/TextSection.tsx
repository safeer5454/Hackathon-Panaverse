import React from "react";
import feature from "../../public/feature.png";
import Image from "next/image";
import { Button } from "@/Component/ui/button";
import Link from "next/link";

type TextSectionProps = {};

const TextSection: React.FC<TextSectionProps> = () => {
  return (
    <section>
      <div className="flex flex-row justify-start lg:justify-end">
        <h1 className="  lg:w-1/2 text-[44px] font-extrabold tracking-wide  lg:py-8 py-6 leading-[55px]">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid grid-cols-2 gap-8 lg:gap-6 ">
          {/* <div className="opacity-10 text-8xl font-extrabold absolute w-full md:w-2/5 ">
            Different from others
          </div> */}
          <div className="lg:w-3/4 w-full ">
            <h3 className="text-lg font-semibold tracking-wide text-[#212121] leading-5 mb-3">
              Using Good Quality Materials
            </h3>
            <p className=" tracking-tighter text-base font-light text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:w-3/4 w-full ">
            <h3 className="text-lg font-extrabold tracking-wide text-[#212121] leading-5 mb-3">
              100% Handmade Products
            </h3>
            <p className=" tracking-tighter text-base font-light text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:w-3/4 w-full ">
            <h3 className="text-lg font-extrabold tracking-wide text-[#212121] leading-5 mb-3">
              Modern Fashion Design
            </h3>
            <p className=" tracking-tighter text-base font-light text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="lg:w-3/4 w-full ">
            <h3 className="text-lg font-extrabold tracking-wide text-[#212121] leading-5 mb-3">
              Discount for Bulk Orders
            </h3>
            <p className=" tracking-tighter text-base font-light text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-10">
          <Image src={feature} height={270} width={270} alt="image" />
          <div className="flex  flex-col justify-center gap-8  items-start">
            <p className="leading-7 text-base font-light text-[#212121] text-justify">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"/products"}>
              <Button
                variant={"default"}
                className="bg-black p-7 text-white  text-base font-semibold"
              >
                See All Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TextSection;
