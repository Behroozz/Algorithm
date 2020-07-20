// Lauren has a chart of distinct projected prices for a house over the next several years. She must buy the house in one 
// year and sell it in another, and she must do so at a loss. She wants to minimize her financial loss.


// let price = [20,15,8,2,12]
let price = [20, 7, 8, 2, 5]
// reverse [ 20, 8, 7, 5, 2 ]
//let price = [5, 10, 3]

let n = 5 // years

// buy at year 2 , sell at 5 == loss =3

const minimumLoss = (arr) => {
  const reverseSort = arr.concat().sort((a, b) => b - a)

  let loss = Infinity

  for(let i=0; i< reverseSort.length ; i++) {
    let buy = reverseSort[i]
    let sell = reverseSort[i+1]

    let currentLoss = buy - sell

    if(currentLoss < loss && arr.indexOf(buy) < arr.indexOf(sell)) {
      loss = currentLoss
    }
  }

  return loss
}

console.log(minimumLoss(price))

// j = 20 --------> 15 --> 
// i = 15 --> 8 -->
// loss = 5, 12, 7
