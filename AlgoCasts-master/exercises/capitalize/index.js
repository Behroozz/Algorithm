// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // let tempStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (i === 0 || (str[i - 1] && str[i - 1] === " ")) {
  //     tempStr = tempStr.concat(str[i].toUpperCase());
  //   } else {
  //     tempStr = tempStr.concat(str[i]);
  //   }
  // }
  // return tempStr;

  let words = [];
  for (let char of str.split(" ")) {
    words.push(char[0].toUpperCase() + char.slice(1));
  }
  return words.join(" ");
}

capitalize("a lazy fox");
module.exports = capitalize;
