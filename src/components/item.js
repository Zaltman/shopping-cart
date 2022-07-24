export default function Item(props) {
  console.log(props);

  const price = props.item.price;
  const currency = props.item.currency;
  const name = props.item.name;
  const img = props.item.img;

  return (
    <div className="item">
      <img src={img}></img>
      <div className="textCont">
        <h2> {name}</h2>
        <h2>
          {price}
          {currency}
        </h2>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
