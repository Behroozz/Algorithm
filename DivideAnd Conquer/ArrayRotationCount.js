//https://www.youtube.com/watch?v=4qjprDkJrjY
// O(logn)
function arrayRotationCount(Arr) {
  const arrayLength = Arr.length
  let low = 0
  let high = arrayLength - 1

  while(low <= high) {
    if(Arr[low] <= Arr[high] ) 
      return low // case1

    let mid = (low + high) / 2
    let next = mid + 1 % arrayLength
    let prev = (mid + arrayLength - 1)% arrayLength
    
    if(Arr[mid] <= Arr[next] && Arr[mid] <= Arr[prev]) {
      return mid // case 2
    }

    else if(Arr[mid] <= Arr[high]) high = mid -1 // case 3
    else if(Arr[mid] >= Arr[low]) low = mid + 1 // case 4
  }
  return -1
}

const result = arrayRotationCount([15,22,23,28,31,38,5,6,8,10,12])
console.log('result', result)