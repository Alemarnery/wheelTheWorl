//Exercise 2
console.log("Exercise Two ==> Coins!");

function minCoinsNeeded(coins: number[], n: number): number {
  const minCoin = Math.min(...coins);

  //testing the small coin available
  if (minCoin < n) {
    // Remove duplicate coin values
    const uniqueCoins = [...new Set(coins)];
    // Sort the coins ==> [10, 5, 1]
    const coinsSorted = uniqueCoins.sort((a, b) => (a < b ? 1 : -1));
    let value = 0;

    return coinsSorted.reduce((acc: any, current: any) => {
      if (current <= n) {
        value = value + current;
        if (value <= n) {
          acc = acc + 1;
          console.log("Su moneda es de ===>", current);

          //Revisando si puedo dar mas monedas de la misma denominacion
          let i = value;
          while (i <= n) {
            i = i + current;
            if (i <= n) {
              console.log("Su moneda es de ===>", current);
              acc = acc + 1;
            }
          }
        } else {
          value = value - current;
        }
        return acc;
      }
      return acc;
    }, 0);
  }

  //There aren't coins for you
  return -1;
}

console.log("Your coins are:", minCoinsNeeded([1, 5, 10], 7));
