/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let line = [];
  let maxPerLine = maxWidth;
  let lineIndex = 0;
  line[lineIndex] = [];
  let currentLenghtOfLine = 0;

  for (let i = 0; i < words.length; i++) {
    const wordCharLength = words[i].length + 1;
    maxPerLine = maxPerLine - wordCharLength;
    console.log(maxPerLine);
    if (maxPerLine > 0) {
      console.log("lineIndex", lineIndex);
      console.log(words[i]);
      line[lineIndex].push(words[i]);
      currentLenghtOfLine += words[i].length;
      const numberOfWordsOnLine = line[lineIndex].length;
      const uniformThreashold = currentLenghtOfLine + numberOfWordsOnLine;
      // console.log("line[lineIndex]", line[lineIndex]);
      // console.log("uniformThreashold", uniformThreashold);
      // if (uniformThreashold >= maxWidth) {
      //   console.log("Uniform Space", line[lineIndex]);
      // }
      // line[lineIndex].push(" ");
      // console.log("line", line[lineIndex]);
    } else {
      console.log(words[i]);
      lineIndex += 1;
      line[lineIndex] = [];
      line[lineIndex].push(words[i]);
      maxPerLine = maxWidth;
      continue;
    }
  }
  console.log("line", line);
  return line;
};

// Loop through cases
// grab the first word
// if the space  + sum is less than maxWidth
// add to the line
// else
// if there is more words than 1 or last line
// compute the remaining space and create uniform space

// const case1 = ["This", "is", "an", "example", "of", "text", "justification."];
const case2 = ["What", "must", "be", "acknowledgment", "shall", "be"];
// const case3 = [
//   "Science",
//   "is",
//   "what",
//   "we",
//   "understand",
//   "well",
//   "enough",
//   "to",
//   "explain",
//   "to",
//   "a",
//   "computer.",
//   "Art",
//   "is",
//   "everything",
//   "else",
//   "we",
//   "do",
// ];

// fullJustify(case1, 16);
fullJustify(case2, 16);
// fullJustify(case3, 20);
