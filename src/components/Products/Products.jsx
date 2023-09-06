import React from "react";
import ProductItem from "./ProductItem";

const Products = ({ data }) => {
  console.log(data);
  const displayedProducts = data.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
  return (
    <div>
      <h3>Available Products</h3>
      {displayedProducts}
    </div>
  );
};

export default Products;
