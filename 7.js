/*zadatak sa rutama i gradovima, wtf je ovo */
function TotalRoutes(n) {
    const route = (num) => {
      if (num <= 1) {
        return 1;
      }
      return num * route(num - 1);
    };
    const totalRoutes = route(n - 1);
  
    return totalRoutes;
  }
  
  const gradovi = 4;
  const ukupnoPuteva = TotalRoutes(gradovi);
  
  console.log(gradovi,ukupnoPuteva);z