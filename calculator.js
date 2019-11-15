function calculator(strExpr) {
  const symbols = { '*': 1, '/': 1, '+': 1, '-': 1 };
  let num = '';
  let newList = [];
  strExpr.forEach((char, idx) => {
    
  });
}




// def calculator(stringExpr):
//   symbols = ['*', '/', '+', '-']
//   num = ''
//   newList = []
//   for idx, char in enumerate(stringExpr):
//     if char not in symbols:
//       num += char
//       if idx == len(stringExpr) - 1: newList.append(int(num))
//     else:
//       newList.append(int(num))
//       newList.append(char)
//       num = ''
//   def compute(symbol):
//     symbolLocation = newList.index(symbol)
//     num2 = newList.pop(symbolLocation + 1)
//     newList.pop(symbolLocation)
//     if symbol == '*': newList[symbolLocation - 1] *= num2   
//     elif symbol == '/': newList[symbolLocation - 1] /= num2
//     elif symbol == '+': newList[symbolLocation - 1] += num2
//     else: newList[symbolLocation - 1] -= num2
//   while len(newList) > 1:
//     try: compute('*')
//     except:
//       try: compute('/')
//       except:
//         try: compute('+')
//         except: compute('-')
//   return newList[0]
// print(calculator('1+23248*3/6-48'))