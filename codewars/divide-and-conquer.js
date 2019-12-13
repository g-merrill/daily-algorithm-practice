function divCon(x){
  return x.reduce((acc, num) => acc + ((typeof num === 'number') ? num : -parseInt(num)), 0);
}

console.log(divCon([9, 3, '7', '3'])); // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]));  // 14
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // 13
console.log(divCon([])); // 0