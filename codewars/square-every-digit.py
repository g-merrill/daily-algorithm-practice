# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python
# 9119 => 811181
# as in... 9 1 1 9 => 81 1 1 81
# note: function accepts an integer and returns an integer

# the way that the number is returned, it looks like we will need to 
# stringify the number, modify it, and then parse back to an integer at the end

def square_digits(num):
  result = ''
  for char in str(num):
    result += str(int(char)**2)
  return int(result)


print(square_digits(9119))