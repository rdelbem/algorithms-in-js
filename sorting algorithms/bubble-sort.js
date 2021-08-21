/**
 * BubbleSort
 *
 * Trough every iteration two consecutive elements are compered.
 * If the second is evaluated as lesser than the first one,
 * those values are swaped.
 * Then, bigger values "bubble" to the top/end of the data structure.
 *
 * Notice: Bubble sort uses nested loops!
 *
 * Big O: can be O(n²) but, if the analyzed data is nearly sorted, a short circuit
 * can prevent further unecessary iterations, roughly getting near to O(n).
 * This is, obviously, an ideal scenerio.
 *
 *
 */

function bubble(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let tempArrElem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempArrElem;
        noSwaps = false;
        console.log(`swaped ${arr[j]} and  ${arr[j + 1]}`);
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubble([1, 4, 5, 6, 0, 3, 9]));
