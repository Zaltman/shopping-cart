import Item from './item';
import itemsArray from '../assetts/items';
import { useEffect, useState } from 'react';
import LoadingSpinner from './Spinner';
import './spinner.css';

export default function ShopPage(props) {
  const [isLoading, setIsLoading] = useState(true);

  const shopItems = props.shopItems;
  const handleAddToCartClick = props.handleAddToCartClick;
  let imageCounter = 0;
  let imageLoaded = () => {
    imageCounter += 1;
    if (imageCounter >= shopItems.length) {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);
  // });

  return (
    <div className="shopPage">
      {isLoading ? <LoadingSpinner /> : ''}
      <div className={isLoading ? 'invisible' : ''}>
        <h2>Shop page</h2>
        {shopItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onLoad={imageLoaded}
            handleAddToCartClick={handleAddToCartClick}
            shopItems={shopItems}
          ></Item>
        ))}
      </div>
    </div>
  );
}
