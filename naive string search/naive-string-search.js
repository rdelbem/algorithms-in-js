/**
 *
 * Naive string match counter.
 * Nested loops, thus O(n²).
 *
 */

const string = "wowomgzomgxcxd";

function naiveStringSearch(string, pattern) {
  let numOfLettersMatched = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(string[i], pattern[j]);
      if (string[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) numOfLettersMatched++;
    }
  }

  return numOfLettersMatched;
}

console.log(naiveStringSearch(string, "omg"));
