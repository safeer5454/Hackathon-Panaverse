import React from "react";
import first from "../../public/first.png";
import Image, { StaticImageData } from "next/image";
type ProductCardProps = {
  name: string;
  image: StaticImageData;
  price: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Image src={image} alt="product" width={380} height={400} />
      <div className="flex flex-col justify-center items-center pt-2">
        <h2 className=" text-lg font-semibold ">{name}</h2>
        <span className="text-lg font-semibold ml-2 ">${price}</span>
      </div>
    </div>
  );
};
export default ProductCard;
