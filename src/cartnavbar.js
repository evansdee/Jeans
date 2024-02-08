import React from "react"
import { FaWindowClose } from "react-icons/fa"

export default function CartNavBar({closeCartMenu,cartArr}){

   
    
    return(
        <div className="cart-nav-bar" >
            <FaWindowClose  onClick={closeCartMenu}/>
            <h2>Cart</h2>
            <div className="item">
                {cartArr.length} Items
            </div>
        </div>
    )
}