/**
 *
 * Find the Symmetric Difference
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
 * For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
 * Symmetric difference is a binary operation, which means it operates on only two elements.
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.
 * Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
 * Create a function that takes two or more arrays and returns an array of their symmetric difference.
 * The returned array must contain only unique values (no duplicates).
 *
 */

function sym(...args) {
  const countOccurrencesObj = {};
  const symmetricDifference = [];
  let pairs = [];
  let newArgs = [];

  // accepts only pairs because it is binary
  const count = (pairs) => {
    let cleaningFirstArr = [...new Set(pairs[0])]; //this removes the internal duplicates
    let cleaningSecondArr = [...new Set(pairs[1])]; //this removes the internal duplicates
    let concatenated = cleaningFirstArr.concat(cleaningSecondArr);
    concatenated.forEach(
      (item) => (countOccurrencesObj[item] = countOccurrencesObj[item] + 1 || 1)
    );
  };

  //makes the pairs and sends to count
  const makePairs = (args) => {
    pairs = [[...args[0]], [...args[1]]];
    //console.log(pairs);
    count(pairs);
  };

  makePairs(args); //first call

  //console.log(pairs);
  //console.log(args);
  //console.log(countOccurrencesObj);

  const findSymmetry = () => {
    const valuesArray = Object.entries(countOccurrencesObj);
    for (let value of valuesArray) {
      //console.log(value);
      if (value[1] === 1) {
        symmetricDifference.push(parseInt(value[0]));
        newArgs = [...symmetricDifference];
      }
    }
  };

  findSymmetry();

  console.log(symmetricDifference);
  return symmetricDifference;
}

//sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
