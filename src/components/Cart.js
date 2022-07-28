export default function Cart(props) {
  let shopItems = props.shopItems;
  console.log(shopItems);
  return (
    <div className="cart">
      <div> Cart </div>

      {shopItems.map((item) => {
        if (item.isInCart === false) {
          return;
        } else
          return (
            <div key={item.id}>
              {item.name} {item.price} {item.currency}
              <img src={item.img}></img>
            </div>
          );
      })}
    </div>
  );
}
