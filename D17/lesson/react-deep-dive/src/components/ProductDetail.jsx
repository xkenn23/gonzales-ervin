import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // access the dynamic route parameters
  return (
    <div>
      <h2>Product id: {id}</h2>
    </div>
  );
};

export default ProductDetail;
