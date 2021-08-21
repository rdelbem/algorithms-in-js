/**
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 * Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 **/

function updateInventory(arr1, arr2) {
  let countStockItems = {};

  arr1.forEach((elem) => (countStockItems[elem[1]] = elem[0]));
  arr2.forEach(
    (elem) =>
      (countStockItems[elem[1]] = countStockItems[elem[1]] + elem[0] || elem[0])
  );
  arr1 = Object.entries(countStockItems);
  arr1.forEach((elem) => elem.reverse());

  let newArr = [];
  arr1.forEach((elem) => newArr.push(elem[1]));
  newArr = newArr.sort();
  console.log(newArr);

  console.log(countStockItems);
  let arr3 = [];
  newArr.forEach((elem) => {
    arr3.push([countStockItems[elem], elem]);
  });

  console.log(arr3);
  return arr3;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(
  [
    [0, "Bowling Ball"],
    [0, "Dirty Sock"],
    [0, "Hair Pin"],
    [0, "Microphone"],
  ],
  [
    [1, "Hair Pin"],
    [1, "Half-Eaten Apple"],
    [1, "Bowling Ball"],
    [1, "Toothpaste"],
  ]
);
//updateInventory(curInv, newInv);
