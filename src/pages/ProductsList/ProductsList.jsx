import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import ratingIcon from "../../images/rating-icon.svg";
import searchIcon from "../../images/search-btn.svg";
import clearIcon from "../../images/clear-btn.svg";

const ProductsList = () => {
  const [products, setProducts] = useState([]); //Хук

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  };

  // const toDetails = (item) => () => {
  //   localStorage.setItem("productAbout", JSON.stringify(item));
  // };

  const searchProduct = document.getElementById("search_product");

  const searchProductsCatalog = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://dummyjson.com/products/search?q=" + searchProduct.value
    );
    const { products } = await response.json();
    setProducts(products);
  };

  const clearProductsCatalog = () => {
    searchProduct.value = "";
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="main">
      <div className="search-container">
        <form onSubmit={searchProductsCatalog}>
          <input id="search_product" type="text" />
          <button type="submit" className="button button-search">
            <img src={searchIcon} />
          </button>
          <button
            onClick={clearProductsCatalog}
            className="button button-clear"
          >
            <img src={clearIcon} />
          </button>
        </form>
      </div>

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
                // onClick={toDetails(item)}
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
