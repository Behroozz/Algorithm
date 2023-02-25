// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//[2, 1, 0]
//[2, 1, 0]

const swap = (arr, j, k) => {
  let temp = arr[k];
  arr[k] = arr[j];
  arr[j] = temp;
};

// O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// O(n^2)
function selectionSort(arr) {
  let i = 0;
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    // I think this is the lowest element prove me wrong
    let indexOfmin = i;
    // in the rest of the array find a value that is less than indexofmin
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfmin]) {
        // if you find it update
        indexOfmin = j;
      }
    }
    if (indexOfmin !== i) {
      swap(arr, i, indexOfmin);
    }
  }
  return arr;
}

/**
 * get an array , divide the array to smallest chunck
 * and merge the result
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

mergeSort([2, 1, 0, 4]);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
