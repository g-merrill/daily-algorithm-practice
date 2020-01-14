// Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
// worst case, every character is unique, just add the characters to the font
// one inefficient way would be to add the letters from the back to the front as growing letter blocks, until it is a palindrome
// will need a palindrome checker helper function
const shortestPalindrome = s => {
  const checkForPalindrome = string => {
    let status = true;
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        status = false;
        break;
      }
    }
    return status;
  }
  // run s through palindrome checker helper function
  let isPalindrome = checkForPalindrome(s);
  // grab last char as initial tempcharstring
  let tempCharStringCounter = 0;
  let tempCharString = s[s.length - 1];
  let newString = isPalindrome ? s : '';
  // while: not a palindrome
  while (!isPalindrome) {
    // add tempcharstring to front of s to create newString
    newString = tempCharString + s;
    // check if nowstring is palindrome
    isPalindrome = checkForPalindrome(newString);
    // if not add to tempcharstring from back
    if (!isPalindrome) {
      tempCharStringCounter++;
      tempCharString = '';
      for (let j = 0; j < tempCharStringCounter; j++) {
        tempCharString += s[s.length - 1 - j];
      }
    }
  }
  return newString;
};

console.log(shortestPalindrome('aacecaaa')); // => 'aaacecaaa'
console.log(shortestPalindrome('abcd')); // => 'dcbabcd'
console.log(shortestPalindrome('a')); // => 'a'
console.log(shortestPalindrome('aba')); // => 'aba'
console.log(shortestPalindrome('annabanana')); // => 'ananabannabanana'
