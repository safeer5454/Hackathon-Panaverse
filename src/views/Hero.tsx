import { Button } from "@/Component/ui/button";
import Image from "next/image";
import React from "react";
import featured1 from "../../public/Featured1.png";
import featured2 from "../../public/Featured2.png";
import featured3 from "../../public/Featured3.png";
import featured4 from "../../public/Featured4.png";
import { ShoppingCartIcon } from "lucide-react";
import hero from "../../public/header.png";
import Link from "next/link";
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="flex pt-1">
      {/* left div */}
      <div className=" flex-1 py-16 ">
        <div className="lg:w-2/3 ">
          <span className="px-4 py-2 bg-[#E1EDFF] text-[#0000ff] rounded font-semibold">
            Sale 70%
          </span>
          <h1 className="scroll-m-20 lg:text-6xl text-5xl font-extrabold tracking-wide  lg:py-8 py-6">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 text-[#666] [&:not(:first-child)]:mt-6 w-full lg:w-4/5 font-normal">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Link href={"/products"}>
            <Button
              variant={"default"}
              className="bg-black  p-7 mt-9 text-white  text-base font-semibold"
            >
              <div>
                <ShoppingCartIcon className="mr-3 " />
              </div>
              Start Shopping
            </Button>
          </Link>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 pt-8">
          <Image src={featured1} alt="feat1" />
          <Image src={featured2} alt="feat2" />
          <Image src={featured3} alt="feat3" />
          <Image src={featured4} alt="feat4" />
        </div>
      </div>
      {/* right div */}
      <div className="hidden lg:flex  items-center bg-[#FFECE3] w-[600px] h-[600px] rounded-full">
        {/* <div className="w-96 h-3/6 bg-[#FFECE3] absolute rounded-full z-0" /> */}
        <Image
          src={hero}
          className="absolute "
          width={650}
          height={650}
          alt="hero"
        />
      </div>
    </section>
  );
};
export default Hero;
