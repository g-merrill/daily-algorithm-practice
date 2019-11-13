def fizz_buzz(input):
  for num in input:
    result = num
    if num % 3  == 0 and num % 5 == 0:
      result = 'fizz-buzz'
    elif num % 3 == 0:
      result = 'fizz'
    elif num % 5 == 0:
      result = 'buzz'
    print(result)

fizz_buzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])