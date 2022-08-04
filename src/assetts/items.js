import uniqid from 'uniqid';

//imports images to array;
function importAll(r) {
  return r.keys().map(r);
}
let items = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

items[0] = {
  id: uniqid(),
  name: 'Fake setup basic',
  price: 850,
  currency: '$',
  img: items[0],
  isInCart: false,
  amount: 0,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius assumenda blanditiis nisi tempore? Suscipit nam aspernatur pariatur sed totam.',
};
items[1] = {
  id: uniqid(),
  name: 'Fake setup advanced',
  price: 1340,
  currency: '$',
  img: items[1],
  isInCart: false,
  amount: 0,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius assumenda blanditiis nisi tempore? Suscipit nam aspernatur pariatur sed totam.',
};
items[2] = {
  id: uniqid(),
  name: 'Fake setup professional',
  price: 435,
  currency: '$',
  img: items[2],
  isInCart: false,
  amount: 0,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius assumenda blanditiis nisi tempore? Suscipit nam aspernatur pariatur sed totam.',
};
items[3] = {
  id: uniqid(),
  name: 'Fake setup novice',
  price: 330,
  currency: '$',
  img: items[3],
  isInCart: false,
  amount: 0,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius assumenda blanditiis nisi tempore? Suscipit nam aspernatur pariatur sed totam.',
};
items[4] = {
  id: uniqid(),
  name: 'Fake setup beginner',
  price: 4200,
  currency: '$',
  img: items[4],
  isInCart: false,
  amount: 0,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius assumenda blanditiis nisi tempore? Suscipit nam aspernatur pariatur sed totam.',
};
items[5] = {
  id: uniqid(),
  name: 'Fake setup supreme',
  price: 2800,
  currency: '$',
  img: items[5],
  isInCart: false,
  amount: 0,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius assumenda blanditiis nisi tempore? Suscipit nam aspernatur pariatur sed totam.',
};

export default items;
