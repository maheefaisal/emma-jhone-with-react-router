import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product }) => {
  const { id, img, price, name, quantity } = product;
  return (
    <div className="review-item">
      {/* <h2>Review Item </h2> */}
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">Name: {name}</p>
        <p>
          Price: <span className="orange-text">{price}</span>
        </p>
        <p>
          Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button className="button-delete">
        <FontAwesomeIcon className="button-delete-icon" icon={faTrash} />
      </button>
    </div>
  );
};

export default ReviewItem;
