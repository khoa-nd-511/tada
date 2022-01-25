import { Product } from "@chec/commerce.js/types/product";
import Link from "next/link";
import { FC } from "react";
import ProductItem from "./ProductItem";

const ProductListing: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="products" id="products">
      {products.map((product) => (
        <Link href={`/product/${product.permalink}`} key={product.id}>
          <a>
            <ProductItem product={product} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;
