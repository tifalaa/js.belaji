//Napisati function findBiggestNumber koji uzima listu brojeva i returns najveci broj iz liste
function findBiggestNumber(numbers) {
    const biggestnum = Math.max(...numbers);
  
    return biggestnum;
  }
  const array = [10, 5, 20, 8, 15];
  const biggest = findBiggestNumber(array);
  
  console.log(biggest);