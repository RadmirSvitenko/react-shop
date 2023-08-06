import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchProducts from "./SearchProducts.css";
import searchIcon from "../../images/search-btn.svg";
import clearIcon from "../../images/clear-btn.svg";

const searhProducts = () => {
  return (
    <div className="search-container">
      <form>
        <input type="text" />
        <button className="button button-search">
          <img src={searchIcon} />
        </button>
        <button className="button button-clear">
          <img src={clearIcon} />
        </button>
      </form>
    </div>
  );
};
export default searhProducts;
