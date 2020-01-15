function rotatedSortedSearch(nums, target) {
  // start with default result if target is not found
  let result = -1;

  // do binary search here 
  // if number is found in array, change result to number's index in array

  let leftIdx = 0;
  let rightIdx = nums.length - 1;

  let leftVal, rightVal;
  const checkForValue = (l, r) => {
    leftVal = nums[l];
    rightVal = nums[r];
    if (leftVal === target) {
      result = l;
    } else if (rightVal === target) {
      result = r;
    }
  }

  checkForValue(leftIdx, rightIdx);
  let midIdx, midVal;
  while (result === -1 && rightIdx - leftIdx > 1) {
    // get middle index and value
    midIdx = Math.floor((leftIdx + rightIdx) / 2);
    midVal = nums[midIdx];
    // check if midVal is target value
    if (midVal === target) {
      result = midIdx;
      break;
    }
    // change indices based on values logic
    if (leftVal < midVal) {
      if (leftVal < target && midVal > target) {
        rightIdx = midIdx;
      } else if (midVal < target || rightVal > target) {
        leftIdx = midIdx;
      } else {
        break;
      }
    } else {
      if (leftVal < target || midVal > target) {
        rightIdx = midIdx;
      } else if (midVal < target && rightVal > target) {
        leftIdx = midIdx;
      } else {
        break;
      }
    }
    // recheck based on new indices
    checkForValue(leftIdx, rightIdx);
  }

  return result;
}

console.log(rotatedSortedSearch([4,5,6,7,8,9,0,1,2], 1)) // => 7
console.log(rotatedSortedSearch([8,9,0,1,2,4,5,6,7], 1)) // => 3
console.log(rotatedSortedSearch([8,9,0,1,2,4,5,6,7], 3)) // => -1