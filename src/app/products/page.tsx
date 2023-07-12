import ProductCard from "@/Component/Product";
import { products } from "@/constants";
import Link from "next/link";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-11 my-14">
      {products.map((product, i) => (
        <Link href={`/female/${product.id}`} key={i}>
          <ProductCard
            key={i}
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
export default Products;
