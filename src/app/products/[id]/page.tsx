"use client";
import { Button } from "@/Component/ui/button";
import { products, sizes } from "@/constants";
import { ShoppingCartIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React from "react";
type ProductDetailPageProps = {
  params: {
    id: string;
  };
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const productDetail = products.find((product) => product.id === +params.id);
  const [selectedImage, setSelectedImage] = React.useState<StaticImageData>(
    productDetail?.image!
  );
  const [quantity, setQuantity] = React.useState<number>(1);
  return (
    <>
      <div className="mt-16">
        {/* Product image */}
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-3">
              {/* image lists */}
              {productDetail?.extraImages?.map((img, i) => (
                <Image
                  key={i}
                  onMouseOver={() => setSelectedImage(img)}
                  // className={`hover:${setImage(second)}`}
                  src={img}
                  height={100}
                  width={100}
                  alt="pic"
                />
              ))}
            </div>
            <div>
              <Image
                src={selectedImage}
                width={560}
                height={500}
                alt="detail pic"
              />
            </div>
          </div>
          <div className=" flex flex-col mt-12 gap-y-9 p-4">
            <div>
              <h3 className="text-2xl">{productDetail?.name}</h3>
              <p className="font-semibold text-2xl opacity-30 ">
                {productDetail?.tag}
              </p>
            </div>
            <div>
              <p className="text-sm font-bold tracking-tighter text-[#212121] leading-5 mb-3">
                SELECTED SIZE
              </p>
              <div className="flex flex-row gap-4">
                {sizes.map((size, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 text-[#666] font-bold justify-center items-center flex rounded-3xl p-5 hover:shadow-xl"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-sm font-bold tracking-tighter text-[#212121] leading-5">
                Quantity:
              </p>
              <div
                onClick={() =>
                  setQuantity(quantity > 0 ? quantity - 1 : quantity)
                }
                className="flex justify-center items-center w-8 h-8 cursor-pointer bg-[#f1f1f1] rounded-3xl ml-8"
              >
                -
              </div>
              {quantity}
              <div
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 bg-[#f1f1f1] rounded-3xl flex justify-center cursor-pointer items-center"
              >
                +
              </div>
            </div>
            <div className="flex items-center">
              <Button className="bg-black  p-5  text-white  text-base font-semibold">
                <div>
                  <ShoppingCartIcon className="mr-3 " />
                </div>
                Add to Cart
              </Button>
              <span className="text-2xl font-semibold ml-6">
                {productDetail?.price}
              </span>
            </div>
          </div>
        </div>
        {/* Product detail */}
        <div className="flex flex-col  gap-8 mt-16 mb-36 lg:px-20 md:px-10 px-6">
          <div className="flex  w-full py-14 border-b-2 border-[#c4c4c4]">
            {/* <div className="opacity-10  text-8xl font-extrabold absolut w-full md:w-2/5 ">
                  overview
                </div> */}
            <h2 className="font-bold text-2xl tracking-wide mb-4">
              Product Information
            </h2>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row  lg:gap-80 md:gap-0">
            <h2 className="grow-0 shrink-0 font-bold text-base text-[#666] tracking-wide mb-4">
              PRODUCT DETAILS
            </h2>
            <p className="grow shrink text-justify font-light text-base leading-[26px] tracking-tighter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row lg:gap-[362px] md:gap-9">
            <h2 className="grow-0 shrink-0 font-bold text-base text-[#666] tracking-wide mb-4">
              PRODUCT CARE
            </h2>
            <ul>
              <li className="list-disc font-semibold leading-7 tracking-tighter">
                Lorem ipsum dolor sit amet
              </li>
              <li className="list-disc font-semibold leading-7 tracking-tighter">
                Lorem ipsum dolor sit amet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
