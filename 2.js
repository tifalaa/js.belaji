/*Napisati function getQuantityOfCartItems
 koji uzima kao parametar array itema i returna ukupan quantity (koristiti built-in array methode*/
 function getTotalPriceOfCartItems(cart) {
    let suma = 0;
    for (let index = 0; index < cart.length; index++) {
      suma += cart[index].quantity * cart[index].prNice;
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

  const getQuantity = cart.reduce((accumulator,item)=>{
    return accumulator + item.quantity
}, 0)
console.log(total)