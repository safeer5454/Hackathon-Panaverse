import React from "react";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import linkedin from "../../../public/linkedin.svg";
import { companyData } from "@/constants";
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="">
      {/* first section of footer */}
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 md:px-28 px-4">
        {/* image div */}
        <div className="lg:col-span-2 col-span-1 gap-8 flex flex-col w-4/5">
          <Image src={logo} alt="logo" height={100} width={144} />
          <p className="tracking-tighter text-base font-light text-[#666]">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-6">
            <div className="py-[6px] px-[6px] flex bg-[#f1f1f1] cursor-pointer rounded-xl">
              <Image src={twitter} height={22} width={22} alt="fb" />
            </div>
            <div className="py-[6px] px-[6px] flex bg-[#f1f1f1] cursor-pointer rounded-xl">
              <Image src={facebook} height={22} width={22} alt="fb" />
            </div>
            <div className="py-[6px] px-[6px] flex bg-[#f1f1f1] cursor-pointer rounded-xl">
              <Image src={linkedin} height={22} width={22} alt="fb" />
            </div>
          </div>
        </div>
        {/* 2nd col */}
        <div className="col-span-1">
          <h3 className="font-bold text-xl text-[#666] tracking-wide mb-4">
            Company
          </h3>
          <ul className="flex flex-col gap-2">
            {companyData?.company.map((item, i) => (
              <li className="font-normal text-[#666] text-base" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* 3rd col */}
        <div className="col-span-1">
          <h3 className="font-bold text-xl text-[#666] tracking-wide mb-4">
            Support
          </h3>
          <ul className="flex flex-col gap-2">
            {companyData?.support.map((item, i) => (
              <li className="font-normal text-[#666] text-base" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div className="col-span-1">
          <h3 className="font-bold text-xl text-[#666] tracking-wide mb-4">
            Contact
          </h3>
          <ul className="flex flex-col gap-2">
            {companyData?.contact.map((item, i) => (
              <li className="font-normal text-[#666] text-base" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* second section of footer */}
      <div className="mt-28 border-t border-[#666] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <p className="lg:mx-32 lg:my-6 my-3 mx-8 font-normal text-base text-[#666] leading-6">
          Copyright © 2022 Dine Market
        </p>
        <p className="lg:mx-32 lg:my-6 my-3 mx-8 font-normal text-base text-[#666] leading-6">
          Design by.{" "}
          <span className="font-bold text-base text-[#212121] leading-6">
            Weird Design Studio
          </span>
        </p>
        <p className="lg:mx-32 lg:my-6 my-3 mx-8 font-normal text-base text-[#666] leading-6">
          Code by.{" "}
          <span className="font-bold text-base text-[#212121] leading-6">
            Safeer5454 github
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
