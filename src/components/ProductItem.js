import React from "react";
import { findDaysToShip } from '../utils/util.js';

const ProductItem = props => {
  const { product, orderDate } = props;

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.productName}{" "}
            </b>
            <div></div>
            {product.inventoryQuantity > 0 ? (
              <small>{product.inventoryQuantity + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            <div></div>
            {product.shipOnWeekends === true ? (
              <small>Product Ships on Weekend</small>
            ) : (
                <small className="has-text-danger">Product does not ship Weekend</small>
            )}
            <div></div>
            <small>Max Shipping Date from selected Date:{ findDaysToShip(product, orderDate).toDateString() }</small>
            <div className="is-clearfix">
              <button
                className="button is-small is-outlined is-primary is-pulled-right"
                onClick={() =>
                  props.addToCart({
                    id: product.productName,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;