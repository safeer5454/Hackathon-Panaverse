import React from "react";
import Event2 from "../../public/event2.png";
import Image, { StaticImageData } from "next/image";
type PromotionCardProps = {
  title: string;
  oldPrice: number;
  newPrice: number;
  backgroundColor: string;
  image: StaticImageData;
};

const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  oldPrice,
  newPrice,
  backgroundColor,
  image,
}) => {
  return (
    <div className={`bg-[${backgroundColor}] pt-4`}>
      <div className="ml-4">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-black text-base font-normal ">
          {title}
        </p>
        <div>
          <span className="line-through">${oldPrice}</span>
          <span className="text-lg font-semibold ml-2">${newPrice}</span>
        </div>
      </div>
      <div className="">
        <Image src={image} alt="event2" />
      </div>
    </div>
  );
};
export default PromotionCard;
