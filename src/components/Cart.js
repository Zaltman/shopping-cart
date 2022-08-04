import { IoBagRemoveSharp, IoBagAddSharp } from 'react-icons/io5';

export default function Cart(props) {
  let shopItems = props.shopItems;
  const handleIncreaseUnitAmount = props.handleIncreaseUnitAmount;
  const handleDecreaseUnitAmount = props.handleDecreaseUnitAmount;
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
                  <div className="cartBtns">
                    <div onClick={handleDecreaseUnitAmount} data-id={item.id} className="removeAddUnitBtn">
                      <IoBagRemoveSharp pointerEvents="none" />
                    </div>
                    <div onClick={handleIncreaseUnitAmount} data-id={item.id} className="removeAddUnitBtn">
                      <IoBagAddSharp pointerEvents="none" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="cartImg" src={item.img} alt="Item"></img>
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
