function maxProfit(prices) {
  
  let minPrice = prices[0];
  let maxPrice, priceEnd;
  
  prices.forEach((price, idx) => {

    if (idx !== 0) {
      console.log(idx);
      // grab price at end
      priceEnd = prices[prices.length - idx];
  
      // if (prices[i])
    }

  });



  return;
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))