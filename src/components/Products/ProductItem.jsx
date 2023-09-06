import React from "react";

const ProductItem = ({ product }) => {
  return (
    <>
      <section>
        <p>{product.title}</p>
      </section>
    </>
  );
};

export default ProductItem;
