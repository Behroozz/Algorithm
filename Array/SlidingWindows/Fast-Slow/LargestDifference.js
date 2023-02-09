// These ones have a fast pointer that grows your window under a certain condition. 
// So for Minimum Window Substring, you want to grow your window until you have a 
// window that contains all the characters you’re looking for.
// It will also have a slow pointer, that shrinks the window. Once you find a 
// valid window with the fast pointer, you want to start sliding the slow pointer up 
// until you no longer have a valid window.
// So in the Minimum Window Substring problem, once you have a substring that 
// contains all the characters you’re looking for, then you want to start shrinking 
// it by moving the slow pointer up until you no longer have a 
// valid substring (meaning you no longer have all the characters you’re looking for)

function findLargestDifference() {
  let maxDiff = 0

  let right = 1
  let left = 0

  while(right < array.length && left <= right) {

    if(array[right] >= array[left]) {
      if( maxDiff < array[right] - array[left]) {  
        maxDiff = array[right] - array[left]
      }
      right+=1

    } else {
      left++ 
    }
  }
  return maxDiff
}

//Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element
let array = [4, 16, 2, 9, 9, 15, 3, 1, 10]
console.log(findLargestDifference(array))
