import Item from './item';
import itemsArray from '../assetts/items';
import { useState } from 'react';
export default function ShopPage(props) {
  const shopItems = props.shopItems;
  const handleAddToCartClick = props.handleAddToCartClick;
  return (
    <div className="shopPage">
      <h2>Shop page</h2>
      {shopItems.map((item) => (
        <Item item={item} key={item.id} handleAddToCartClick={handleAddToCartClick} shopItems={shopItems}></Item>
      ))}
    </div>
  );
}
