import Image from "next/image";
import React from "react";
import Event1 from "../../public/event1.png";
import Event2 from "../../public/event2.png";
import { Button } from "@/Component/ui/button";
import PromotionCard from "@/Component/PromotionCard";
import { promotionProduct } from "../constants/index";
type PromotionsProps = {};

const Promotions: React.FC<PromotionsProps> = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col  items-center justify-center">
        <p className="text-[#0062f5] font-bold text-xs tracking-wider">
          PROMOTIONS
        </p>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
          Our Promotions Events
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 pt-4">
          {/* left div */}
          <div className="flex flex-col gap-3  justify-between flex-1">
            <div className="bg-[#D6D6D8] flex flex-col sm:flex-row bg items-center px-3">
              <div className="flex flex-col   p-4">
                <h3 className="scroll-m-20 text-3xl font-bold tracking-tight">
                  GET UP TO 60%
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-1 font-normal text-lg">
                  For the summer season
                </p>
              </div>
              <Image src={Event1} alt="event1" />
            </div>
            <div>
              <div className="flex flex-col bg-[#212121] justify-center items-center py-10">
                <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-white">
                  GET 30% Off
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-4 text-white text-sm font-medium">
                  USE PROMO CODE
                </p>
                <Button className="text-white w-2/3 text-lg bg-[#474747] tracking-widest rounded-[4px]">
                  DINEWEEKENDSALE
                </Button>
              </div>
            </div>
          </div>
          {/* right div */}
          <div className="flex flex-col md:flex-row gap-3 flex-1">
            {/* <div> */}
            {/* <div className="bg-[#EFE1C7] p-3">
              <div className="ml-3">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-black text-base font-normal ">
                Flex Sweatshirt
                </p>
                <div>
                <span className="line-through">$100.00</span>
                <span className="text-lg font-semibold ml-2">$75.00</span>
                </div>
              </div>
              <div className="self-center">
              <Image src={Event2} alt="event2" />
              </div>
            </div> */}
            {promotionProduct.map((product) => (
              <PromotionCard
                key={product.oldPrice}
                image={product.image}
                title={product.title}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                backgroundColor={product.backgroundColor}
              />
            ))}
            {/* </div> */}
            {/*  */}
            {/* <div></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promotions;
