// https://www.interviewcake.com/question/java/recursive-string-permutations

// c

// ca
// putting a on either sides of c
// ca, ac

// cat
// putting t at every position
// cat, cta, atc, act, tca, tac

// cats
// putting s at every position
// cats, cast, ctas, ctas, csat, csta, atsc
// if string was lollipop
function stringPermutations(str, substring, result = []) {

    // base case
    if (/* however we know we are done */) return result;


    // pushing a permutation into the result array
    result.push(str);

    // making a new substr




    // call function again, with slightly modified input
    stringPermutations(str, substring, result);
}


// solution
function getPermutations(string) {

  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);
  
  
  
  // getPermutations('cat')
  // ...pending, based on below, the result of this is what is actually returned, b/c its the top-most level function call

  // getPermutations('ca')
  // ...pending, based on below

  // getPermutations('c')
  // hey reached the base case! I can do the below code with this

  // then it bubbles back up the the other pending cases, after doing all the foreach's and loops



  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
}


// fibonacci sequence
// 1 1 2 3 5 8 13 21

// fibonacci(3) should return 3
// fibonacci(5) should return 8

function fibonacci(num) {
  if  



}
