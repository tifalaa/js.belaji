//Napisati function getTotalPriceOfCartItems koji uzima kao parametar array itema i returna ukupan price (uzmi u obzir i quantity) (koristiti built-in array methode)
function getTotalPriceOfCartItems(cart) {
  let suma = 0;
  for (let index = 0; index < cart.length; index++) {
    suma += cart[index].quantity * cart[index].price;
  }
  return suma;
}
const cart = [
  { title: "Book", quantity: 3, price: 20 },
  { title: "TV", quantity: 1, price: 820 },
  { title: "Bread", quantity: 1, price: 2 },
  { title: "T-shirt", quantity: 5, price: 10 },
  { title: "Socks", quantity: 7, price: 4 },
];
const suma = getTotalPriceOfCartItems(cart);
console.log(suma);