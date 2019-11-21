// function arrayValues(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       if (arr[j] > arr[i]) {
//         for (let k = j + 1; k < n; k++) {
//           if (arr[k] > arr[j]) {
//             return true;
//           }
//         }
//       }
//     }
//   }
//   return false;
// }

function arrayValues(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 2; i++) {
    // check if array at index i is less than array at following index
    // if no, change the i to the value at the following index
    if (arr[i] < arr[i + 1]) {
      // if yes, look for third number at values at later indexes
      let first, second, third;
      first = arr[i];
      second = arr[i + 1];
      for (let j = i+ 2; j < n; j++) {
        third = arr[j];
        if (third > first && third > second) return [true, first, second, third];
      }
    }
  }
  return false;
}

console.log(arrayValues([3, 2, 1, 2, 5]));