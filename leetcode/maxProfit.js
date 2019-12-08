function maxProfit(prices) {
  
  let maxProfitValue = 0;
  let minPrice = prices[0];
  
  prices.forEach( price => {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfitValue = Math.max(maxProfitValue, price - minPrice);
    }
  });

  return maxProfitValue;

}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([]));