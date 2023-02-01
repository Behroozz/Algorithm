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

const houseRubber = (houses) => {
    if(houses.length === 0) {
        return 0
    }
    if(houses.length === 1) {
        return houses[0]
    }
    if(houses.length === 2) {
        return Math.max(...houses)
    }
    let n = houses.length
    let dp = new Array(n)

    dp[0] = houses[0]
    dp[1] = Math.max(houses[0], houses[1])
    
    for(let i=2; i< houses.length; i++) {
        dp[i] = Math.max(houses[i] + dp[i-2], dp[i-1])
    }
    console.log(dp)
    return dp[n-1]
}

const houses = [5, 3, 4, 11, 2]
//const houses = [6, 7, 1, 3, 8, 2, 4]
const res = houseRubber(houses)
console.log('res', res)

// 5 --> |3| --> 4, 11