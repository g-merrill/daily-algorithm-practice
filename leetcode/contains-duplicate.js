// 
function containsDuplicate(nums) {
  // initialize hash table of numbers
  let prevNums = {};
  let hasDuplicate = false;
  // iterate through nums array
  nums.forEach(num => {
    // check if num in prevNum
    if (prevNums[`${num}`]) {
      // if so, we are done
      hasDuplicate = true;
      return;
    } else {
      // if not, add it to the hash table
      prevNums[`${num}`] = true;
    }
  });
  return hasDuplicate;
}

console.log(containsDuplicate([1,2,3,1]));