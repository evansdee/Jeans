import { FaBars, FaCartPlus, FaSearch, FaUser } from "react-icons/fa";


export default function NavBar({openCartMenu,openHamburgerMenu,cartArr}) {
 
  const liItem=["New Arrivals","Men","Women","Collection","Ashluze.com"]
    return (
      <nav>
        <FaBars id="Faclose" className="icon-size" onClick={openHamburgerMenu} />
        <img src="./img/logo.avif" alt="" />
        
        <ul>
          {
            liItem.map(ele=>(<li key={ele}>{ele}</li>))
          }
        </ul>
        <main>
          <FaSearch id="icon"/>
          <FaUser id="icon"/>
        <FaCartPlus className="icon-size" onClick={openCartMenu} />
      <p>
        {cartArr.length}
      </p>
        </main>
        
        
      </nav>
    );
  }