// https://www.interviewcake.com/question/javascript/reverse-words?course=fc1&section=array-and-string-manipulation


// input is array of characters that make up words, has spaces
// goal is to reverse the words and return the message


// One strategy:
// cycle through characters in array
// if its a character, put it at the end of the current sequence of letters, before any one space in the string (if one exists)
// if we hit a space, put it at the beginning of the string

// example:
// c
// ca
// cak
// cake
// _cake
// p_cake
// po_cake



// Another strategy:
// word: ['c', 'a', 'k', 'e']
// 'cake'
// result: [' ', 'cake']
// word: []
// word: ['p', 'o', ...]

// out of place
// function reverseWords(charArray) {
//     let word = [];
//     let result = [];
//     charArray.forEach(c => {
//         if (c !== ' ') {
//             word.push(c);
//         } else {
//             result.push(word.join(''));
//             result.unshift(c);
//             word = [];
//         }
//     });
//     return result.join('');
// }


let message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];

// in place
const reverseWords = charArray => {
    message = charArray.join('').split(' ').reverse().join(' ').split('');
}
reverseWords(message);
console.log(message.join(''));



// function squareArrayInPlace(intArray) {

//     intArray.forEach((int, index) => {
//       intArray[index] *= int;
//     });

//     // NOTE: no need to return anything - we modified
//     // intArray in place
//   }

//   function squareArrayOutOfPlace(intArray) {

//     // We allocate a new array that we'll fill in with the new values
//     const squaredArray = [];

//     intArray.forEach((int, index) => {
//       squaredArray[index] = Math.pow(int, 2);
//     });

//     return squaredArray;
//   }
