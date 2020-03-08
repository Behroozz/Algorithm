// Find maximum possible stolen value from houses
// There are n houses build in a line, each of which contains some value in it. 
// A thief is going to steal the maximal value of these houses, but he can’t steal 
// in two adjacent houses because owner of the stolen houses will tell his two neighbour 
// left and right side. What is the maximum stolen value.

// Examples:

// Input  : hval[] = {6, 7, 1, 3, 8, 2, 4}
// Output : 19
// Thief will steal 6, 1, 8 and 4 from house.

// Input  : hval[] = {5, 3, 4, 11, 2}
// Output : 16
// Thief will steal 5 and 11


function maxHouseRubber(hVal) {
  if(hVal.length === 0) return 0
  if(hVal.length === 1) return hVal[0]

  let maxProfit = hVal[1]
  let right = hVal[0]
  let left = 0

  for(let i=2; i< hVal.length; i++) {

    let oldProfit = maxProfit
    console.log('either', hVal[i], ' and ', right)
    console.log('or', hVal[i], ' and ', left)

    maxProfit = Math.max(hVal[i] + right, hVal[i] + left)
    console.log('Winner', maxProfit)
    left = right
    right = oldProfit
  }

  return Math.max(Math.max(right, left), maxProfit)
}

const result =  maxHouseRubber([6, 7, 1, 3, 8, 2, 4])
// const result =  maxHouseRubber([5, 3, 4, 11, 2])

console.log('result', result)

// {6, 7, 1, 3, 8, 2, 4}
//  |      |     |     |
//   
//
//



// func rob(nums []int) int {
//   if len(nums) == 0 { return 0}
//   if len(nums) == 1 { return nums[0]}

//   x,y,z := 0, nums[0], nums[1]
//   for i:= 2; i < len(nums); i++ {
//       oldZ := z
//       z = max(nums[i] + x, nums[i] + y)
      
//       x = y
//       y = oldZ
//   }
  
//   return max(max(x,y),z)
// }

// func max(x,y int) int {
//   if x < y {return y}
//   return x
// }
