/**
 *
 * Naive string match counter.
 * Nested loops, thus O(n²).
 *
 */

const string = "wowomgzomgxcxd";

function naiveStringSearch(string, pattern) {
  let numOfLettersMatched = 0;

  for (let index = 0; index < string.length; index++) {
    for (let jindex = 0; jindex < pattern.length; jindex++) {
      console.log(string[index], pattern[jindex]);
      if (string[index + jindex] !== pattern[jindex]) break;
      if (jindex === pattern.length - 1) numOfLettersMatched++;
    }
  }

  return numOfLettersMatched;
}

console.log(naiveStringSearch(string, "omg"));
