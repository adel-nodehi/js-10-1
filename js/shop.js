const shoppingList = ['ice-cream'];
let totalPrice = 200;

const addToShoppingList = function (item) {
  shoppingList.push(item);
  totalPrice += 50;
};

const showShoppingList = function () {
  console.log(`your shopping list: ${shoppingList.join(', ')}.
total price is ${totalPrice}$`);
};

export { shoppingList, addToShoppingList, showShoppingList };

export default function () {
  console.log(`your shopping list: ${shoppingList.join(', ')}.
  total price is ${totalPrice}$`);
}
