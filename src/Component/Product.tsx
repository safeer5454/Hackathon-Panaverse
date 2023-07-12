import React from "react";
import first from "../../public/first.png";
import Image, { StaticImageData } from "next/image";
type ProductCardProps = {
  name: string;
  image: StaticImageData;
  price: string;
  tag: string;
};

const Product: React.FC<ProductCardProps> = ({ name, price, image, tag }) => {
  return (
    <div className="flex flex-col justify-center">
      <Image src={image} alt="product" width={250} height={260} />
      <div className="flex flex-col justify-center mt-2">
        <h2 className=" text-[16.8px] font-semibold ">{name}</h2>
        <p className="font-normal text-[15px] text-[#888]">{tag}</p>
        <span className="text-lg font-semibold mt-2">{price}</span>
      </div>
    </div>
  );
};
export default Product;
