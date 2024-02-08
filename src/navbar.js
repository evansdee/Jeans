import { FaBars, FaCartPlus } from "react-icons/fa";


export default function NavBar({openCartMenu,openHamburgerMenu,cartArr}) {
 
  const liItem=["New Arrivals","Men","Women","Collection","Ashluze.com"]
    return (
      <nav>
        <FaBars className="icon-size" onClick={openHamburgerMenu} />
        <img src="./img/logo.avif" alt="" />
        
        <ul>
          {
            liItem.map(ele=>(<li key={ele}>{ele}</li>))
          }
        </ul>
        <main>
        <FaCartPlus className="icon-size" onClick={openCartMenu} />
      <p>
        {cartArr.length}
      </p>
        </main>
        
        
      </nav>
    );
  }