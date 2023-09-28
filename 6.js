/*Napisati function koji uzima neki drinks array i returna sortirane drinkove po cijeni od manje ka vecoj*/
let array=[
    {title:'naranca',price:'10'},
    {title:'limunada',price:'3'},
    {title:'caj',price:'2'},
    {title:'kafa',price:'5'}]

   
 array.sort(function(a, b){return a.price-b.price});
 console.log(array.sort());
    