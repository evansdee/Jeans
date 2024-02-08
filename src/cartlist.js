import CartItem from "./cartitem";

export default function CartList({ man,cartArr, nextCount,prevCount }) {
  return (
    <div className="cart-list">
      {cartArr.map((ele) => {
        return (
          <CartItem
            key={ele.id}
            ele={ele}
            prevCount={prevCount}
            nextCount={nextCount}
            man={man}
          />
        );
      })}
    </div>
  );
}
