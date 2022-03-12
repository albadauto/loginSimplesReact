import React from "react";

const Products = ({ product }) => {
  return (
    <>
    {product.map(produtos => <h4>{produtos.nome}</h4>)}
    </>
  );
};

export default Products;
