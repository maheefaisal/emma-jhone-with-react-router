import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
const Orders = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="shop-container">
      <div className="review-container">
        {/* <h2>This is page for orders{products.length}</h2> */}
        {products.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <dir className="cart-container">
        <Cart cart={products}></Cart>
      </dir>
    </div>
  );
};

export default Orders;
