import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        // renderText is used to render whatever we have written in this function, the value which is passed in the function is used below
        decimalScale={2}
        // how many decimal after .
        value={getBasketTotal(basket)}
        // this is the value of our products
        displayType={"text"}
        thousandSeparator={true}
        // when value crosses 3 digits we need the thousand seperator i.e comma to seperate things
        prefix={"$"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
