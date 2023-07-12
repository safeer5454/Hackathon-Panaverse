import ProductCard from "@/Component/Product";
import { products } from "@/constants";
import Link from "next/link";
import React from "react";

type categoryTypes = {
  params: {
    name: string;
  };
};

const category: React.FC<categoryTypes> = ({ params }) => {
  const categoryProduct = products.filter(
    (product) => product.category === params.name
  );
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-11 my-14">
      {categoryProduct.map((product, i) => (
        <Link href={`/products/${product.id}`} key={i}>
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            tag={product.tag}
          />
        </Link>
      ))}
    </div>
  );
};
export default category;
