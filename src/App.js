import React from "react";
import { FaBars, FaCartPlus, FaCrosshairs, FaSearch, FaWhatsapp, FaWindowClose } from "react-icons/fa";
import clothes from "./data";

export default function App() {
  const [clothesArr, setClothesArr] = React.useState(clothes);
  const [selectedItem, setSelectedItem] = React.useState(clothes[0]);
  const [isOpen,setIsOpen] = React.useState(false)
  function onSelectClothe(value) {
    setSelectedItem(value);
  }

  function handleOpen(){
    setIsOpen(true)
  }

  function handleClose(){
    setIsOpen(false)
  }

  return (
    <div className="App">
      <NavBar onHandleOpen={handleOpen} />
      <p className="text-under-nav">
        Home / Denim Pants / {selectedItem.clotheName}
      </p>
      <DisplayItem selectedItem={selectedItem} />
      <Help />
      <ClotheList onSelectClothe={onSelectClothe} clothesArr={clothesArr}  />
      {isOpen &&<HamBurgerMenu isOpen={isOpen} handleClose={handleClose}/>}
    </div>
  );
}

function HamBurgerMenu({isOpen,handleClose}){
  return(
    <div className={`hamburger ${isOpen ? "hamburgerTransition": ''}`}>
      <div className="left">
        <FaWindowClose onClick={handleClose}/>
      </div>
      <div className="right" onClick={handleClose}></div>
    </div>
  )
}

function Help() {
  return (
    <div className="help">
      <FaWhatsapp className="icon-style" />
      <div className="helpText">
        <h4>Olajumoke</h4>
        <p>Need help? Chat with Us</p>
      </div>
    </div>
  );
}
function DisplayItem({ selectedItem }) {
  // const [size,setSize] = React.useState(selectedItem.size)
  const [selectedSize, setSelectedSizd] = React.useState(
    selectedItem.size[0].sizeNum
  );
  const [count, setCount] = React.useState(1);

  function prevCount() {
    count > 1 && setCount((prev) => prev - 1);
  }
  function nextCount() {
    count < 12 && setCount((prev) => prev + 1);
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

        <div className="btn">
          <Button>Add to Cart</Button>
          <Button>Buy it now</Button>
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
function NavBar({onHandleOpen}) {
  return (
    <nav>
      <FaBars className="icon-size" onClick={onHandleOpen} />
      <img src="./img/logo.avif" alt="" />
      <FaCartPlus className="icon-size" />
    </nav>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function ClotheList({ clothesArr, onSelectClothe }) {
  return (
    <div className="clotheList">
      <h3>Have you seen these?</h3>
      <div className="clothes">
        {clothesArr
          .filter((ele) => {
            return ele.price !== 175;
          })
          .map((ele) => {
            return (
              <Clothe key={ele.id} onSelectClothe={onSelectClothe} ele={ele} />
            );
          })}
      </div>
    </div>
  );
}

function Clothe({ ele, onSelectClothe,onDisplayClothe }) {
  // console.log(ele.size)
  return (
    <div onClick={() => onSelectClothe(ele)} className="clothe">
      <img src={ele.img} alt={ele.alt} />
      <h2>{ele.clotheName}</h2>
      <p>${ele.price}.00</p>
      <div className="color" style={{ background: ele.color }}></div>

      <div className="sizes">
        {ele.size
          .filter((ele) => {
            return ele.isAvailble;
          })
          .map((ele) => {
            return <p key={ele.sizeNum}>{ele.sizeNum}</p>;
          })}
        
      </div>
    </div>
  );
}
