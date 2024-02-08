import {FaWindowClose } from "react-icons/fa";


export default function HamBurgerMenu({toggleHamMenu,closeHamburgerMenu}){

  const closeHamMenu={
    transform:"translateX(-100%)",
        transition:"Transform .6s"
  }

  const openHamMenu ={
    transform:"translateX(0%)",
    transition:"Transform .6s"
  }
    return(
      <div className="hamburger" style={toggleHamMenu ? openHamMenu :closeHamMenu}>
        <div className="left">
          <FaWindowClose onClick={closeHamburgerMenu}/>
        </div>
        <div className="right" onClick={closeHamburgerMenu}></div>
      </div>
    )
  }