// Pres and Aly's solution
// let abbreviate = (string) => {
//   let splitString = string.split(" ");
//   let result = [];
//   let final = [];
//   splitString.forEach(s => {
//     if (s.includes('-')) {
//       s = s.split("-");
//       s.forEach(p => {
//         if (p.length >= 4) {
//           let count = p.length - 2;
//           let answer = p[0] + count + p[p.length - 1];
//           result.push(answer);
//         }
//         else {
//           result.push(p);
//         }
//       });
//       result=result.join("-");
//       final.push(result);
//       // console.log(final)
//     }
//     else {
//       if (s.length >= 4) {
//         let count = s.length - 2;
//         let answer = s[0] + count + s[s.length - 1];
//         final.push(answer);
//       } else {
//         final.push(s);
//       }
//     }
//   });
//   final=final.join(" ");
//   // console.log(final)
//   final.replace("^[ \t]+", "");
//   return final;
// }

function abbreviate(string) {
  let str = string.split('');
  let result = [];
  let wordArray = [];
  let longWord = false;
  str.forEach(char => {
//     check if letter or not
    
//     if letter, check word array
//     if shorter than 3, just add to word array, longWord = false
//     if longer than 3, still add to word array, longWord=true
//     if longWord=true, push first + 
//     (length - 2) + last

// if not letter, submit anything in word array and then clear it, longWord = false, return char

    let charcode = char.charCodeAt(0);
    if (
      (charcode >= 65 && charcode <= 90)
      || (charcode >= 97 && charcode <= 122)
    ) {
      wordArray.push(char);
      if (wordArray.length > 3) longWord = true;
    } else {
      let word;
      if (!longWord) {
        word = wordArray.join('');
        result.push(word, char);
      } else {
        word = `${wordArray[0]}${wordArray.length - 2}${wordArray[wordArray.length - 1]}`;
        result.push(word, char);
      }
      wordArray = [];
      longWord = false;
    }
  });
  if (wordArray.length) {
    if (!longWord) {
        word = wordArray.join('');
        result.push(word);
      } else {
        word = `${wordArray[0]}${wordArray.length - 2}${wordArray[wordArray.length - 1]}`;
        result.push(word);
      }
  }
  return result.join('');
}

console.log(abbreviate('elephant-rides are really fun!'));