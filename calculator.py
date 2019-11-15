def calculator(stringExpr):
  symbols = ['*', '/', '+', '-']
  num = ''
  newList = []
  for idx, char in enumerate(stringExpr):
    if char not in symbols:
      num += char
      if idx == len(stringExpr) - 1: newList.append(int(num))
    else:
      newList.append(int(num))
      newList.append(char)
      num = ''
  def compute(symbol):
    symbolLocation = newList.index(symbol)
    num2 = newList.pop(symbolLocation + 1)
    newList.pop(symbolLocation)
    if symbol == '*': newList[symbolLocation - 1] *= num2   
    elif symbol == '/': newList[symbolLocation - 1] /= num2
    elif symbol == '+': newList[symbolLocation - 1] += num2
    else: newList[symbolLocation - 1] -= num2
  while len(newList) > 1:
    try: compute('*')
    except:
      try: compute('/')
      except:
        try: compute('+')
        except: compute('-')
  return newList[0]
print(calculator('1+23248*3/6-48'))


# loop through string and break apart numbers from symbols
# loop through the list and find the position of a multiplier symbol
# find the numbers on either side of the multiplier
# parseInt to get nums
# multiply the two numbers and splice the resulting number as a string in the place of the previous three list values

# keep doing this until no more multipliers are found

# repeat for divide symbol
  # make sure to error out if dividing by 0
# repeat for add
# repeat for subtract
