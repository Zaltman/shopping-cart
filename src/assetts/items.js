import uniqid from 'uniqid';

//imports images to array;
function importAll(r) {
  return r.keys().map(r);
}
let items = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

items[0] = { id: uniqid(), name: 'name[0]', price: 850, currency: '$', img: items[0] };
items[1] = { id: uniqid(), name: 'name[1]', price: 1340, currency: '$', img: items[1] };
items[2] = { id: uniqid(), name: 'name[2]', price: 435, currency: '$', img: items[2] };
items[3] = { id: uniqid(), name: 'name[3]', price: 330, currency: '$', img: items[3] };
items[4] = { id: uniqid(), name: 'name[4]', price: 4200, currency: '$', img: items[4] };
items[5] = { id: uniqid(), name: 'name[5]', price: 2800, currency: '$', img: items[5] };

console.log(items);
export default items;
