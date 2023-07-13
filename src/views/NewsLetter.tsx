import { Input } from "@/Component/Input";
import React from "react";
import { Button } from "@/Component/ui/button";

type NewsLetterProps = {};

const NewsLetter: React.FC<NewsLetterProps> = () => {
  return (
    <section className="py-40 px-32 flex justify-center items-center">
      {/* <div className="opacity-5 z-[-1]  lg:text-9xl md:text-7xl text-6xl overflow-hidden  font-extrabold absolute ">
        Newsletter
      </div> */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold tracking-wide leading-[55px] mb-1">
          Subscribe Our Newsletter
        </h1>
        <p className=" tracking-tighter text-base font-light text-[#212121] mb-8">
          Get the latest information and promo offers directly
        </p>
        <form className="flex flex-col md:flex-row gap-3  p-4 w-full ">
          <Input placeholder="Input Email Address" />
          <Button className="bg-black lg:w-1/3   text-white  text-sm font-semibold">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
};
export default NewsLetter;
