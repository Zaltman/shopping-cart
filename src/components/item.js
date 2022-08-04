import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsCartPlus } from 'react-icons/bs';
import React from 'react';

export default function Item(props) {
  const shopItems = props.shopItems;
  const price = props.item.price;
  const currency = props.item.currency;
  const name = props.item.name;
  const img = props.item.img;
  const id = props.item.id;
  const handleAddToCartClick = props.handleAddToCartClick;

  return (
    <div className="item">
      <img onLoad={props.onLoad} src={img}></img>
      <div className="textCont">
        <h2 className="itemName"> {name}</h2>
        <button>
          <Link to={`/shop/${id}`}>more details</Link>
        </button>
        <h2>
          {price}
          {currency}
        </h2>
        <IconContext.Provider value={{ className: 'addToCartIcon' }}>
          <BsCartPlus onClick={handleAddToCartClick} data-id={id} id="addToCartBtn"></BsCartPlus>
        </IconContext.Provider>
      </div>
    </div>
  );
}
