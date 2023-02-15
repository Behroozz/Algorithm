// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let start = 0;
  let end = str.length - 1;
  let placeholder = "";
  while (start < str.length && end > 0) {
    placeholder[start] = str.charAt(end);
    placeholder[end] = str.charAt(start);
    start++;
    end--;
  }
  return placeholder;

  // let reversed = "";

  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  // return str.split("").reduce((acc, curr, index) => {
  //   acc = curr + acc;
  //   debugger;
  //   return acc;
  // }, "");
}

const result = reverse("apple");
console.log(result);
module.exports = reverse;
