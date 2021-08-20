/**
 * Binary search is much faster than linear search.
 * Different from linear search, binary search implements such a logic that it covers half of the data structure
 * and, based on the searched value, it can infer if it proceeds its search to its left or right. By doing this
 * it drastically reduces time.
 *
 * NOTICE, the iteratable data structure, i.e. an array, must be organized, sorted.
 *
 * BIG(O): Worst and average case O(log n)
 *
 */

const arrSorted = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42,
];

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let pivotPoint = Math.floor((start + end) / 2);
  let checks = 0;

  while (arr[pivotPoint] !== value) {
    console.log(start, pivotPoint, end);
    if (value < arr[pivotPoint]) {
      end = pivotPoint - 1;
    } else {
      start = pivotPoint + 1;
    }

    pivotPoint = Math.floor((start + end) / 2);

    //fail safe
    checks++;
    if (checks === arr.length) return "nothing found!!";
  }

  return `The index of the value provided is ${pivotPoint}`;
}

console.log(binarySearch(arrSorted, 42));
