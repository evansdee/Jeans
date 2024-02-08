import { FaWindowClose } from "react-icons/fa";

export default function CartItem({ man,ele, prevCount, nextCount }) {
  return (
    <div className="cart-item">
      <div className="cart-top">
        <img src={ele.img} alt={ele.alt} />
        <div className="top">
          <div className="cart-top-text">
            <div className="name">
              <div className="text">
                <h4>{ele.clotheName}</h4>
                <p>Size: {ele.selectedSize}</p>
                <p>Color: {ele.color}</p>
              </div>
              <div className="close">
                <FaWindowClose  onClick={()=>man(ele.id)}/>
              </div>
            </div>
          </div>

          <div className="cart-bottom-text">
            <div className="quantity">
              <p>
                <span onClick={prevCount}>-</span>
                <span>{ele.count}</span>
                <span onClick={nextCount}>+</span>
              </p>
            </div>
            <p>
              ${ele.price}.00
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
