function toWeirdCase(str) {
  let isEven = true;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += str[i];
      isEven = true;
    } else {
      result += isEven ? str[i].toUpperCase() : str[i].toLowerCase();
      isEven = !isEven;
    }
  }
  return result;
}

console.log(toWeirdCase('Hello there my name is greg'))

//   have variable that is initialized as: isEven = true
//   set isEven to true when you hit a space
//   flip isEven after modifying each Character
//   if ifEven is true, do char.toUpperCase
//   if false, do char.toLowerCase
//   return string
