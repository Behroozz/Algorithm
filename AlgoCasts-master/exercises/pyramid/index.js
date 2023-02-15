// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// const levels = 2 * n - 1;
// let mid = Math.floor(levels / 2);
// for (let row = 0; row < n; row++) {
//   let level = "";
//   for (let column = 0; column < levels; column++) {
//     if (mid - row <= column && mid + row >= column) {
//       level += "#";
//     } else {
//       level += " ";
//     }
//   }
//   console.log(level);
// }

function pyramid(n, row = 0, level = "") {
  // calculate common values
  const levels = 2 * n - 1;
  let mid = Math.floor(levels / 2);
  // when we are done with everything
  if (n === row) {
    return;
  }

  // when we are done with column go
  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  // work need to happen in this iteration
  let add = "";
  if (mid - row <= level.length && mid + row >= level.length) {
    add += "#";
  } else {
    add += " ";
  }

  // go to next column
  pyramid(n, row, level + add);
}
pyramid(3);

module.exports = pyramid;
