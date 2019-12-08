function twoSum(nums, target) {
  let diffs = {};
  let answer = [];
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    if (diffs[nums[i]] || diffs[nums[i]] === 0) {
        answer = [diffs[nums[i]], i];
        // console.log(i, nums[i], diffs[nums[i]], diffs);
        break;
      } else {
        // if not in diffs array, add target - num to diffs array with a value of the idx
        diffs[target - nums[i]] = i;
        // console.log(diffs);
    }
  }
  return answer;
}

console.log(twoSum([2,7,11,15], 9));