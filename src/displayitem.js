import React from "react";
import Button from "./button";
import Help from "./help";

export default function DisplayItem({
  selectedItem,
  selectedSize,
  onChangeSize,
  onAddItemCart,
  openCartMenu
}) {

  const [count, setCount] = React.useState(1);
  function prevCount() {
    count > 1 && setCount((prev) => prev - 1);
  }
  function nextCount() {
    count < 12 && setCount((prev) => prev + 1);
  }

  const newObj={
    ...selectedItem,
    count,
    selectedSize
  }

  function addToCart(){
    onAddItemCart(newObj)
    openCartMenu()
  }

  // console.log(newObj)

  return (
    <div className="displayItem">
      <img src={selectedItem.img} alt={selectedItem.alt} />
      <div className="displayText">
        <h1>{selectedItem.clotheName}</h1>
        <p id="one">${selectedItem.price}.00</p>
        <p id="two">Tax included. Shipping calculated at checkout</p>
        <p id="three">Size: {selectedSize}</p>

        <div className="sizes">
          {selectedItem.size.map((ele) => {
            return (
              <Size
                key={ele.sizeNum}
                selectedSize={selectedSize}
                ele={ele}
                onChangeSize={onChangeSize}
              />
            );
          })}
        </div>

        <div className="color">
          Color: {selectedItem.color} <br />
          <span style={{ background: selectedItem.color }}></span>
        </div>
        <div className="quantity">
          <p>Quantity:</p>
          <p>
            <span onClick={prevCount}>-</span>
            <span>{count}</span>
            <span onClick={nextCount}>+</span>
          </p>
        </div>
        <p>
          {count===12 ? `Only ${count} items in Stock`:""}
        </p>

        <div className="btn">
          <Button onClick={addToCart}>Add to Cart</Button>
          <Button>Buy it now</Button>
          <Help />

        </div>
      </div>
      
    </div>
  );
}

function Size({ ele, onChangeSize, selectedSize }) {
  return (
    <div
      className={`size ${ele.sizeNum === selectedSize && "activeColor"}`}
      style={ele.isAvailble ? {} : { textDecoration: "line-through red" }}
      onClick={() => onChangeSize(ele.sizeNum)}
    >
      {ele.sizeNum}
    </div>
  );
}
