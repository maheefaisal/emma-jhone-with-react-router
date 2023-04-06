import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  console.log(props.product);
  const { img, name, seller, quantity, price, ratings } = props.product;
  const handleAddToCart=props.handleAddToCart;
  return (
    <div className="product">
      {/* <h3>This is product</h3> */}
      <img src={img} alt="" />
      <div className="product-info"> 
        <h6 className="product-name">{name}</h6>
        <p>Price:{price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Quantity:{quantity}</p>
        <p>Ratings:{ratings} star</p>
      </div>
      <button onClick={()=>handleAddToCart(props.product)} className="btn-cart">Add To Cart 
      <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
