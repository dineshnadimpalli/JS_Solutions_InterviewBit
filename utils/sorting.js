// Bubble sort O(n^2)
const bubbleSort = (arr) => {
  // to check if there are swaps or not
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        noSwaps = false;
      }
      // if there are no swaps means the array is sorted, then break the loop
    }
    if (noSwaps) break;
  }
  return arr;
};


// Insertion sort O(n^2)
const insertionSort = (arr) => {
  let i, j;
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    j = i - 1;
    while (j >= 0 && currVal < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currVal;
  }
  return arr;
};



// Exporting all sorting helper functions
module.exports = {
  bubbleSort,
  insertionSort
};
