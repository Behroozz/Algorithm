
function maxSumSizeK(arr, k) {
  let max = -Infinity
  let sum = 0
  let currentWindow = 0
  let i = 0

  if(arr.length < k) {
    return -1
  }
  
  while(i < arr.length) {
    currentWindow++
    sum +=arr[i]
    if(currentWindow === k) {
      max =  max >=sum ? max : sum
      sum -= arr[i+1-k]
      currentWindow --
    }
    i++
  }

  return max
}

let arr = [5, 2,-1, 10]
              // |--W--|
              // 2 3  4 --> 3
              // 4(i)+1-3(k) = 2

let k = 2
const result = maxSumSizeK(arr, k)
console.log('result', result)