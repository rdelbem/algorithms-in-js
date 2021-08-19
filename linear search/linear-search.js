/**
 * Linear searches go from the first to the last element of an iteratable data structure, one at a time.
 * examples: indexOf, includes, find, findIndex
 * big(O): usually O(n).
 * Use cases: when data comes not organized, it can make sense to use linear search.
 * rate: there might be a better solution.
 */

const arrLinear = [1, 2, 3, 4, 5, 6, 7];
const arrSorted = [6, 1, 7, 4, 5, 3, 2];

function linearSearch(arr, search) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === search) return `${search} has the index of ${index}`;
  }
  return -1;
}

//results

console.log(linearSearch(arrLinear, 7));
//output: 7 has the index of 6

console.log(linearSearch(arrSorted, 7));
//output: 7 has the index of 2
