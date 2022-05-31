import React from "react";
import "./Product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          {/* here we have converted rating into array and then we wanted to fill this array and to fill this array we used map method and then we are returning the p for that number of times whatever we have passed through props */}
        </div>
      </div>
      {/* till here we have product info i.e the name price and rating and below we are goinf to add image of product and the add to cart button */}
      <img src={image} alt="" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
