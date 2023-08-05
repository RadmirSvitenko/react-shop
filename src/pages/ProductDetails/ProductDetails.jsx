import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import ratingIcon from "../../images/rating-icon.svg";
import ProductsList from "../ProductsList/ProductsList";

const ProductDetails = (props) => {
  const params = useParams();
  console.log("Params: ", params);

  // const product = JSON.parse(localStorage.getItem("getAboutProduct"));
  // console.log("product: ", product);

  return (
    <div className="main-about-container">
      <Link className="back-to-catalog" key={1} to={`/`}>Вернутся в каталог</Link>
      <div className="product-about-container">
        <div className="product-about-image">
          <img src={ratingIcon} className="about-image-main"></img>
          <div className="image-other-container">
            <img src={ratingIcon} className="about-image-other"></img>
            <img src={ratingIcon} className="about-image-other"></img>
            <img src={ratingIcon} className="about-image-other"></img>
            <img src={ratingIcon} className="about-image-other"></img>
          </div>
        </div>
        <div className="product-about-info">
          <table>
            <tr>
              <th>
                <h1>Подробнее о товаре</h1>
              </th>
            </tr>
            <tr>
              <td>Идентификатор:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Наименование:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Описание:</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Скидка на товар</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Рейтинг</td>
              <td>5</td>
            </tr>
            <tr>
              <td>В наличии:</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Бренд:</td>
              <td>7</td>
            </tr>
            <tr>
              <td>Категория:</td>
              <td>8</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
