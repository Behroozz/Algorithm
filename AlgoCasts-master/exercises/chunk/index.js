// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let index = 0;
  let result = [];
  let tempResult = [];
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
    // if (tempResult.length <= size) {
    //   tempResult.push(array[index]);
    //   index++;
    //   if (tempResult.length === size || index === array.length) {
    //     result.push(tempResult);
    //     tempResult = [];
    //   }
    // }
  }

  return result;
}

chunk([1, 2, 3, 4], 2);

module.exports = chunk;
