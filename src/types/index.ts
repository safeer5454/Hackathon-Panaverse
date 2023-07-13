import Image, { StaticImageData } from "next/image";
export type ProductDetail = {
  id: number;
  name: string;
  tag: string;
  price: string;
  category: string;
  image: StaticImageData;
  extraImages: StaticImageData[];
};
