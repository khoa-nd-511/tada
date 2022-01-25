import { Product } from "@chec/commerce.js/types/product";
import NextImage from "next/image";
import { FC } from "react";

const ProductItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product">
      <NextImage
        className="product__image"
        src={product.image?.url || ""}
        alt={product.image?.description || ""}
        width={product.image?.image_dimensions.width}
        height={product.image?.image_dimensions.height}
      />
      <div className="product__info">
        <h2 className="product__name">Shop {product.name}</h2>
      </div>
    </div>
  );
};

export default ProductItem;
