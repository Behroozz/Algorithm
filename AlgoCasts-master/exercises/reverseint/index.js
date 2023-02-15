// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
  var digit,
    result = 0;

  while (n) {
    digit = n % 10;
    console.log(digit); //  Get right-most digit. Ex. 123/10 → 12.3 → 3
    result = result * 10 + digit; //  Ex. 123 → 1230 + 4 → 1234
    console.log(result);
    n = (n / 10) | 0; //  Remove right-most digit. Ex. 123 → 12.3 → 12
    console.log(n);
  }

  return result;
}

module.exports = reverseInt;

reverseInt(51);
