import { FaBars, FaCartPlus } from "react-icons/fa";


export default function NavBar({openCartMenu,openHamburgerMenu,cartArr}) {
 
    return (
      <nav>
        <FaBars className="icon-size" onClick={openHamburgerMenu} />
        <img src="./img/logo.avif" alt="" />
        <>
        <FaCartPlus className="icon-size" onClick={openCartMenu} />
      <p>
        {cartArr.length}
      </p>
        </>
      </nav>
    );
  }