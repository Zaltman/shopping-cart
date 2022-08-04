export default function Cart(props) {
  let shopItems = props.shopItems;
  console.log(shopItems);
  let priceTotal = 0;
  return (
    <div className="cart">
      <h3 className="cartTitle"> Current shoping cart </h3>
      {shopItems.map((item) => {
        if (item.isInCart === false) {
          return;
        } else {
          priceTotal = parseInt(item.price) * item.amount + parseInt(priceTotal);
          return (
            <div key={item.id} className={'cartCard'}>
              <div className="cartTextCont">
                <h1>{item.name}</h1>
                <div className="priceTextCont">
                  <div>Amount :{item.amount}</div>
                  <div>
                    Unit: {item.price}
                    {item.currency}
                  </div>
                  <div>
                    Total :{item.price * item.amount}
                    {item.currency}{' '}
                  </div>
                </div>
              </div>
              <img className="cartImg" src={item.img}></img>
            </div>
          );
        }
      })}
      <div className={priceTotal <= 0 ? 'invisible' : 'totalPriceCont'}>
        <div className="cartCheckout">Total cart price: {priceTotal}$</div>
        <button id="checkoutBtn">CHECKOUT</button>
      </div>
      <div className={priceTotal <= 0 ? '' : 'invisible'} id={'empty'}>
        EMPTY
      </div>
    </div>
  );
}
