import React, { FC } from "react";
import { commerce } from "lib/commerce";
import ProductListing from "components/ProductListing";
import { Product } from "@chec/commerce.js/types/product";

interface MainProps {
  products: Product[];
}

const Main: FC<MainProps> = (props) => {
  const { products } = props;

  console.log("[Main] products", products);

  return (
    <div>
      <h1>Products</h1>

      <ProductListing products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const list = await commerce.products.list();
  const { data: products } = list;

  return {
    props: {
      products,
    },
  };
}

export default Main;
