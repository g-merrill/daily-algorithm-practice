def fibonacci(n):
  # assert n >=0, f'Index ({n}) of fibonacci sequence must be greater than or equal to zero'
  if n < 0:
    raise IndexError(f'Index ({n}) of fibonacci sequence must be greater than or equal to zero')
  if n == 0 or n == 1:
    return 1
  return (fibonacci(n - 2) + fibonacci(n - 1))

indexes = [-1, 0, 1, 2, 25]
for index in indexes:
  try:
    print(fibonacci(index))
  except IndexError as error:
    print(error.args[0])


