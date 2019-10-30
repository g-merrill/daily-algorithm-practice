// Link:
// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript?collection=6-kyu

// input is an array of number values
// each num is a certain bill that a person in line has
// return YES or NO depending on if someone can sell tickets
// to everyone in order in line with the right amount of change

// variables: isPossible which equals 'YES' or 'NO',
// billsOnHand which is an array that is initially empty

// isPossible only equals 'YES' if all people have been sold
// tickets successfully, otherwise it equals 'NO'

// construct a loop through that will return 'YES' by default if it reaches the end, unless it fails certain conditions along the way,
// this will cut down on time constraints, e.g. as soon as a condition fails, there is no need to examine the rest of the input array!