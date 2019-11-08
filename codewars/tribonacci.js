// test case
// tribonacci([1, 1, 1], 10), [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]

// 2 inputs: 
// array of three starting numbers, 
// n is total length of array that is returned

// Function should return tribonacci sequence of length n

// edge case:
// if n === 0, return []

// set trib array originally to signature
// while length of trib array < n
// we'll keep pushing numbers to trib array
// return trib array of length n

const tribonacci = (signature, n) => {
  let trib = [...signature];
  if (n === 0) return [];
  if (n <= 3) return trib.slice(0, n);
  while (trib.length < n) {
    let temp = trib.slice(trib.length - 3, trib.length);
    trib.push(temp[0] + temp[1] + temp[2]);
  }
  return trib;
}
