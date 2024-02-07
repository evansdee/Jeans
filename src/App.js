import React from "react";
import { FaBars, FaCartPlus, FaSearch } from "react-icons/fa";
import clothes from "./data";
import { nanoid } from "nanoid";

export default function App() {
  const [clothesArr, setClothesArr] = React.useState(clothes);
  const [selectedItem, setSelectedItem] = React.useState(clothesArr[0]);
  return (
    <div className="App">
      <NavBar />
      <p className="text-under-nav">
        Home / Denim Pants / El Clasico Denim Pant
      </p>
      <DisplayItem selectedItem={selectedItem} />
    </div>
  );
}

function DisplayItem({ selectedItem }) {
  // const [size,setSize] = React.useState(selectedItem.size)
  const [selectedSize, setSelectedSizd] = React.useState(30);
  const [count,setCount] = React.useState(1)

  function prevCount(){
    count > 1 && setCount(prev =>prev-1)
  }
  function nextCount(){
    count < 12 && setCount(prev =>prev+1)
  }

  function onChangeSize(value) {
    setSelectedSizd(value);
  }

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

        <div className="color">Color: {selectedItem.color} <br />
        <span></span>
        </div>
        <div className="quantity">
          <p>
            Quantity: 
          </p>
          <p>
            <span onClick={prevCount}>-</span>
            <span>{count}</span>
            <span onClick={nextCount}>+</span>
          </p>
        </div>
        <Button>Add to Cart</Button>
        <Button>Buy it now</Button>
      </div>
    </div>
  );
}

function Size({ ele, onChangeSize, selectedSize }) {
  return (
    <div
      className={`size ${ele.sizeNum === selectedSize && "activeColor"}`}
      style={ele.isAvailble ? {} : { textDecoration: "line-through" }}
      onClick={() => onChangeSize(ele.sizeNum)}
    >
      {ele.sizeNum}
    </div>
  );
}
function NavBar() {
  return (
    <nav>
      <FaBars className="icon-size" />
      <img src="./img/logo.avif" alt="" />
      <FaCartPlus className="icon-size" />
    </nav>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
