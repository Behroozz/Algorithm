let unsortedArray = [-10, 7, 29, 30, 5, -10, -70, 30, 7]
function sortIntegers(a, b) {
  return a - b
}

console.log(unsortedArray.sort(sortIntegers))
console.log(Array.from(new Set(unsortedArray)))


//const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
// => [2,5,1,3,7] [2,3,8,6,3]
// 

//Best and Worst O(nlogn)
function mergeSort(arr) {
  if(arr.length === 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while(indexLeft < left.length && indexRight < right.length) {
    if(left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list))


//O(nlogn) worst O(n^2)
function QuickSort(array) {
  if(array.length < 2) {
    return array
  }

  let pivot = array[0]
  let lesser = []
  let greater = []

  for(let i=1; i< array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i])
    } else {
      greater.push(array[i])
    }
  }

  return [
    ...QuickSort(lesser),
    pivot,
    ...QuickSort(greater)
  ]
}

const quickList = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(QuickSort(quickList))
