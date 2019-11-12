# https://leetcode.com/problems/3sum/
class Solution(object):
  def threeSum(self, nums):
    nums.sort()
    three_sets = []
    if len(nums) >= 3:
      first = nums.pop(0)
      last = nums.pop(-1)
      # while nums has at least three numbers in it
      while len(nums) >= 1:
        sum_two = first + last
        third = -sum_two
        if third in nums:
          if [first, third, last] not in three_sets:
            three_sets.append([first, third, last])
        if sum_two <= 0:
          first = nums.pop(0)
        else:
          last = nums.pop(-1)
    return three_sets