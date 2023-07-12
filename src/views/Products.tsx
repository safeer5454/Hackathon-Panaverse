"use client";
import React from "react";
import Slider from "react-slick";
import ProductCard from "@/Component/ProductCard";
import { products } from "@/constants";
import Link from "next/link";

type ProductsProps = {};

const Products: React.FC<ProductsProps> = () => {
  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#0062f5] font-bold text-xs tracking-wider">
          PRODUCTS
        </p>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 py-4">
          Check What We Have
        </h2>
      </div>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div key={index} className="px-2">
            <Link href={`/products/${item.id}`}>
              <ProductCard
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Products;
