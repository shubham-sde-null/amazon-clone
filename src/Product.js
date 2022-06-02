import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  // const [state, dispatch] = useStateValue();
  // we can get the basket value in state if we destructure it, which is shown below
  const [{ basket }, dispatch] = useStateValue();
  //here we have defined this(useStateValue) in stateprovider at the botttom and it is used to pull information from the data layer (One mistake I made that I brought the useStateValue method but forget to add () at the end of function name which made the output blank)
  console.log(basket);
  const addToBasket = () => {
    //dispatch some action into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add To Basket</button>
      {/* <button >Add To Basket</button> */}
    </div>
  );
}

export default Product;
