import React from "react";
import CartNavBar from "./cartnavbar";
import CartList from "./cartlist";

export default function Cart({
  toggleCart,
  closeCartMenu,
  cartArr,
  man
}) {
  const closeCartStyle = {
    transform: "translateX(100%)",
    transition: "Transform .6s",
  };
  const openCartStyle = {
    transform: "translateX(0%)",
    transition: "Transform .6s",
  };

  return (
    <div
      className="cart-container"
      style={toggleCart ? openCartStyle : closeCartStyle}
    >
      <CartNavBar cartArr={cartArr} closeCartMenu={closeCartMenu} />
      {cartArr.length ? (
        <CartList
    
          cartArr={cartArr}
          man={man}
        />
      ) : (
        <p style={{ textAlign: "center", marginTop: "3em" }}>
          Your Cart is Currently Empty
        </p>
      )}
    </div>
  );
}
