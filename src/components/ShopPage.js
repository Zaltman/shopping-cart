import Item from './item';
import items from '../assetts/items';
export default function ShopPage() {
  console.log(items);
  return (
    <div className="shopPage">
      <h2>Shop page</h2>
      {items.map((item) => (
        <Item item={item} key={item.id}></Item>
      ))}
    </div>
  );
}
