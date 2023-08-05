import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const params = useParams();
  console.log("Params: ", params);

  // const product = JSON.parse(localStorage.getItem("getAboutProduct"));
  // console.log("product: ", product);

  return (
    <div>
      <p>Radmir</p>
      {/* <p>{product.title}</p> */}
    </div>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
