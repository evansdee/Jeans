import React from "react";
import clothes from "./data";
import Cart from "./cart";
import NavBar from "./navbar";
import ClotheList from "./clothelist";
import PopUp from "./pop";
import Button from "./button";
import Footer from './footer'
import UnderFooter from "./under";
import DisplayItem from "./displayitem";
import HamBurgerMenu from "./hamburgermenu";

export default function App() {
  const [clothesArr, setClothesArr] = React.useState(clothes);
  const [selectedItem, setSelectedItem] = React.useState(clothes[0]);
  const [selectedSize, setSelectedSizd] = React.useState(
    selectedItem.size[0].sizeNum
  );
  const [pop,setPop] = React.useState(true)
  const [cartArr,setCartArr] = React.useState([])
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



  function onChangeSize(value) {
    setSelectedSizd(value);
  }
  function onSelectClothe(value) {
    setSelectedItem(value);

    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  }


  return (
    <div className="App">
      <NavBar cartArr={cartArr} openCartMenu={openCartMenu} openHamburgerMenu={openHamburgerMenu}/>
      <p className="text-under-nav">
        Home / Denim Pants / {selectedItem.clotheName}
      </p>
      <DisplayItem
        onChangeSize={onChangeSize}
    
        selectedSize={selectedSize}
        selectedItem={selectedItem}
        onAddItemCart={addItemToCart}
        openCartMenu={openCartMenu}
      />
      <ClotheList onSelectClothe={onSelectClothe} clothesArr={clothesArr} />
      <HamBurgerMenu closeHamburgerMenu={closeHamburgerMenu} toggleHamMenu={toggleHamMenu} />
      <Cart  man={man}  toggleCart={toggleCart} closeCartMenu={closeCartMenu} cartArr={cartArr}/>
      <Footer/>
      <UnderFooter/>
      {pop ? <PopUp onClick={()=>setPop(false)}/> : <Button popBtn={'pop-button'} onClick={()=>setPop(true)}>
        Sign Up For Newsletters</Button>}

    </div>
  );
}
