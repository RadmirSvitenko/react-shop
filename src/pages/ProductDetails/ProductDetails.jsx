import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import ratingIcon from "../../images/rating-icon.svg";
import ProductsList from "../ProductsList/ProductsList";

const ProductDetails = (props) => {
  const params = useParams();
  console.log("Params: ", params);

  const product = JSON.parse(localStorage.getItem("productAbout"));
  console.log("product: ", product);

  return (
    <div className="main-about-container">
      <Link className="back-to-catalog" key={1} to={`/`}>
        Вернутся в каталог
      </Link>
      <div className="product-about-container">
        <div className="product-about-image">
          <img src={product.images[0]} className="about-image-main"></img>
          <div className="image-other-container">
            <img
              src={product.images[1]}
              className="about-image-other-one"
            ></img>
            <img
              src={product.images[2]}
              className="about-image-other-two"
            ></img>
            <img
              src={product.images[3]}
              className="about-image-other-three"
            ></img>
            <img
              src={product.images[4]}
              className="about-image-other-four"
            ></img>
          </div>
        </div>
        <div className="product-about-info">
          <h1>Подробнее о товаре</h1>
          <table>
            <tr>
              <td>Идентификатор:</td>
              <td></td>
              <td>{product.id}</td>
            </tr>
            <tr>
              <td>Наименование:</td>
              <td></td>
              <td>{product.title}</td>
            </tr>
            <tr>
              <td>Описание:</td>
              <td></td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>Скидка на товар</td>
              <td></td>
              <td>{product.discountPercentage}%</td>
            </tr>
            <tr>
              <td>Рейтинг</td>
              <td></td>
              <td>
                {product.rating} <img src={ratingIcon} />{" "}
              </td>
            </tr>
            <tr>
              <td>В наличии:</td>
              <td></td>
              <td>{product.stock} ед</td>
            </tr>
            <tr>
              <td>Бренд:</td>
              <td></td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Категория:</td>
              <td></td>
              <td>{product.category}</td>
            </tr>
            <tr>
              <td>Цена:</td>
              <td></td>
              <td>${product.price}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
