"use client";
import { MenuIcon, ShoppingCartIcon, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../Input";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import female from "@/app/female/page";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [navbar, setNavBar] = useState<boolean>(false);
  // className={`block  lg:flex  items-center md:px-28  px-4 py-5 ${
  //   navbar
  //     ? "fixed top-0 left-0 w-full h-screen flex flex-col "
  //     : "lg:static"
  // }`}
  return (
    // <div className=" block  lg:flex  items-center md:px-28  px-4 py-5">
    <div
      className={`block  lg:flex  items-center md:px-28  px-4 py-5 ${
        navbar
          ? "fixed top-0 bg-white left-0 w-full h-screen flex flex-col "
          : "lg:static"
      }`}
    >
      {/* <div className="w-40 h-4 "> */}
      {/* <div className="bg-orange-400 flex-1 w-full "> */}
      <div className="flex flex-row w-full lg:w-auto justify-between ">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={90} width={134} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MenuIcon onClick={() => setNavBar(!navbar)} />
        </div>
      </div>
      {/* </div> */}
      <div
        className={` lg:flex-1  items-center  pl-24 lg:justify-between ${
          navbar
            ? "flex lg:flex-row flex-1  flex-col justify-center   space-y-3"
            : "hidden lg:flex"
        } `}
      >
        <ul className=" lg:flex lg:space-x-10 lg:items-center space-y-2 lg:space-y-0 text-base">
          <li>
            <Link href={`/category/${"female"}`}>Female</Link>
          </li>
          <li>
            <Link href={`/category/${"male"}`}>Male</Link>
          </li>
          <li>
            <Link href={`/category/${"kids"}`}>Kids</Link>
          </li>
          <li>
            <Link href={`/products`}>All Products</Link>
          </li>
        </ul>
        <div className="hidden h-7 lg:flex px-1 lg:items-center border-[1px] w-1/3 rounded border-[#e4e5eb]">
          <Search size={18} strokeWidth={1} />
          <Input
            placeholder="What you looking for"
            className="border-none font-light text-xs	"
          />
        </div>
        <div className="flex rounded-full h-10 w-10 bg-gray-200 items-center justify-center">
          <ShoppingCartIcon />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Header;