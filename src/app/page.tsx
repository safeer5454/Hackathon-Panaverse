import Hero from "@/views/Hero";
import Products from "@/views/Products";
import Promotions from "@/views/Promotions";
import React from "react";
import Slider from "react-slick";
import Carousel from "@/Component/Carousel";
import TextSection from "@/views/TextSection";
import NewsLetter from "@/views/NewsLetter";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Promotions />
      <Products />
      <TextSection />
      <NewsLetter />
    </main>
  );
}
