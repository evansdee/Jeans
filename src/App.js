import React from "react";
import clothes from "./data";
import Cart from "./cart";
import NavBar from "./navbar";
import ClotheList from "./clothelist";
import Help from "./help";
import DisplayItem from "./displayitem";
import HamBurgerMenu from "./hamburgermenu";

export default function App() {
  const [clothesArr, setClothesArr] = React.useState(clothes);
  const [selectedItem, setSelectedItem] = React.useState(clothes[0]);
  const [selectedSize, setSelectedSizd] = React.useState(
    selectedItem.size[0].sizeNum
  );
  const [cartArr,setCartArr] = React.useState([])
  const [count, setCount] = React.useState(1);
  const [toggleHamMenu,setToggleHamMenu] = React.useState(false)
  const [toggleCart,setToggleCart] = React.useState(false)
  // const [openHamby]

  function man(id){
    setCartArr(prev => prev.filter(ele=>{
      return ele.id !== id
    }))
  }

  // console.log(cartArr)
  function addItemToCart(value){
    setCartArr(prev => ([...prev,value]))
  }
  function openHamburgerMenu(){
    setToggleHamMenu(true)
  }
  function closeHamburgerMenu(){
    setToggleHamMenu(false)
  }
  function openCartMenu(){
    setToggleCart(true)
  }
  function closeCartMenu(){
    setToggleCart(false)
  }

  function prevCount() {
    count > 1 && setCount((prev) => prev - 1);
  }
  function nextCount() {
    count < 12 && setCount((prev) => prev + 1);
  }

  function onChangeSize(value) {
    setSelectedSizd(value);
  }
  function onSelectClothe(value) {
    setSelectedItem(value);
  }


  return (
    <div className="App">
      <NavBar cartArr={cartArr} openCartMenu={openCartMenu} openHamburgerMenu={openHamburgerMenu}/>
      <p className="text-under-nav">
        Home / Denim Pants / {selectedItem.clotheName}
      </p>
      <DisplayItem
        onChangeSize={onChangeSize}
        nextCount={nextCount}
        prevCount={prevCount}
        count={count}
        selectedSize={selectedSize}
        selectedItem={selectedItem}
        onAddItemCart={addItemToCart}
        openCartMenu={openCartMenu}
      />
      <Help />
      <ClotheList onSelectClothe={onSelectClothe} clothesArr={clothesArr} />
      <HamBurgerMenu closeHamburgerMenu={closeHamburgerMenu} toggleHamMenu={toggleHamMenu} />
      <Cart count={count} man={man} prevCount={prevCount} nextCount={nextCount} toggleCart={toggleCart} closeCartMenu={closeCartMenu} cartArr={cartArr}/>
    </div>
  );
}
