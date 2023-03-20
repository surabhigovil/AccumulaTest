import React from "react";
import ProductItem from "./ProductItem";
import withContext from "../withContext";
import { getLocalDate } from "../utils/util.js";

const ProductList = props => {
  const { products } = props.context;

  const todayDate = getLocalDate(new Date());

  const [selectedDate, setSearchDate] = React.useState(todayDate);

  let handleChange = (e) => {
    setSearchDate(e.target.value)
  }

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column">
            <span className="title">Input a date to check shipping date on products</span><br />
            <input 
                type="date" data-display-mode="inline" 
                onChange={handleChange}
                value={selectedDate.split("T")[0]}
                min={todayDate.split("T")[0]}>
            </input>
            {/* <p>Selected Date: {selectedDate}</p> */}
        </div>
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
                orderDate={selectedDate}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);