// const { EventEmitter } = require('events');

// const myEventEmitter = new EventEmitter();

// const makeCoffee = (name) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };

// const makeBill = (price) => {
//     console.log(`Bill sebesar ${price} telah dibuat!`);
// }

// const onCoffeeOrderedListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// }

// myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });


// #CHALLENGE
// TODO 1 : Buat atau impor variabel EventEmitter dari core module events
const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter
const myEmitter = new EventEmitter;

// TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter
myEmitter.on('birthday', birthdayEventListener);

// TODO 4 : Bangkitkan event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda
myEmitter.emit('birthday', 'Wildan');

// EXECUTION COMMAND LINE in terminal:
// node ./events/index.js