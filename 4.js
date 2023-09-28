/*Napisati function filterBlueObjects koji kao parametar uzima array objekata i 
filtrira sve koji imaju property color:blue. (koristiti built-in array methode) */
const items = [
    {name: 'Lopta', color: 'red'},
    {name: 'Stol', color: 'blue'},
    {name: 'Daska', color: 'blue'},
    {name: 'Pernica', color: 'white'}
    ];
    
const filterBlueObjects = items.filter((item)=>{ return item.color=='blue'})
console.log(filterBlueObjects)