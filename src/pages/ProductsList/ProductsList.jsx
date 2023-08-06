import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import ratingIcon from "../../images/rating-icon.svg";
import searhProducts from "../../components/SearchProducts/SearchProducts";

const ProductsList = () => {
  const [products, setProducts] = useState([]); //Хук

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="main">
      {searhProducts()}
      <div className="main-catalog">
        {products.map((item) => (
          <div className="product-container">
            <div className="image-container">
              <img key={1} src={item.images[0]} />
            </div>
            <div className="info-container">
              <div>
                <span key={2} className="product-element product-title">
                  {item.title}
                </span>
                <span key={3} className="product-element product-category">
                  {item.category}
                </span>
              </div>
              <div>
                <span key={4} className="product-element product-rating">
                  {item.rating} <img src={ratingIcon} />
                </span>
                <span key={5} className="product-element product-price">
                  ${item.price}
                </span>
              </div>
              <Link
                className="about-product"
                key={item.id}
                to={`products/${item.id}`}
                onClick={() => {
                  {
                    localStorage.setItem("productAbout", JSON.stringify(item));
                  }
                }}
              >
                Узнать подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductsList.propTypes = {};

export default ProductsList;
