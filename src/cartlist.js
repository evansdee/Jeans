import CartItem from "./cartitem";

export default function CartList({count, man,cartArr, nextCount,prevCount }) {
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
            count={count}
          />
        );
      })}
    </div>
  );
}
