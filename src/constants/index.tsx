import Event2 from "../../public/event2.png";
import Event3 from "../../public/event3.png";
import first from "../../public/first.png";
import second from "../../public/second.png";
import three from "../../public/three.png";
import four from "../../public/four.png";
import fifth from "../../public/fifth.png";
import sixth from "../../public/sixth.png";

import seven from "../../public/seven.png";
import eight from "../../public/eight.png";
import ninth from "../../public/ninth.png";
import tenth from "../../public/tenth.png";
import eleven from "../../public/eleven.png";
import header from "../../public/header.png";
import s2 from "../../public/s2.png";
import s3 from "../../public/s3.png";
import { ProductDetail } from "@/types";

export const promotionProduct = [
  {
    title: "Flex Sweatshirt",
    oldPrice: 100.0,
    newPrice: 75.0,
    backgroundColor: "#EFE1C7",
    image: Event2,
  },
  {
    title: "Flex Push Button Bomber",
    oldPrice: 225.0,
    newPrice: 190.0,
    backgroundColor: "#D6D6D8",
    image: Event3,
  },
];

export const products: ProductDetail[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    tag: "Sweater",
    price: "$195",
    category: "female",
    image: first,
    extraImages: [first],
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    tag: "Dress",
    price: "$195",
    category: "female",
    image: second,
    extraImages: [second, header, s2, s3],
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    tag: "Sweater",
    price: "$195",
    category: "female",
    image: three,
    extraImages: [three],
  },
  {
    id: 4,
    name: "Flex Sweatpants",
    tag: "Pants",
    price: "$195",
    category: "female",
    image: four,
    extraImages: [four],
  },
  {
    id: 5,
    name: "Pink Fleece Sweatpants",
    tag: "Pants",
    price: "$195",
    category: "female",
    image: fifth,
    extraImages: [fifth],
  },
  {
    id: 6,
    name: "Lite Sweatpants",
    tag: "Pants",
    price: "$195",
    category: "female",
    image: sixth,
    extraImages: [sixth],
  },
  {
    id: 7,
    name: "Imperial Alpaca Hoodie",
    tag: "Jackets",
    price: "$195",
    category: "female",
    image: seven,
    extraImages: [seven],
  },
  {
    id: 8,
    name: "Flex Push Button Bomber",
    tag: "Jackets",
    price: "$195",
    category: "male",
    image: eight,

    extraImages: [eight],
  },
  {
    id: 9,
    name: "Muscle Tank",
    tag: "T Shirts",
    price: "$195",
    category: "female",
    extraImages: [ninth],
    image: ninth,
  },
  {
    id: 10,
    name: "Brushed Bomber",
    tag: "Jackets",
    price: "$195",
    category: "female",
    extraImages: [tenth],
    image: tenth,
  },
  {
    id: 11,
    name: "Raglan Sweatshirt",
    tag: "sweater",
    price: "$195",
    extraImages: [eleven],
    category: "male",
    image: eleven,
  },
];
export const companyData = {
  company: [
    "About",
    "Terms of Use",
    "Privacy Policy",
    "How it Works",
    "Contact Us",
  ],
  support: ["Support Carrer", "24h Service", "Quick Chat"],
  contact: ["Whatsapp", "Support 24h"],
};
export const supportData = ["Support Carrer", "24h Service", "Quick Chat"];
export const Contact = ["Whatsapp", "24h Support"];
export const sizes = ["XS", "S", "M", "L", "Xl"];
