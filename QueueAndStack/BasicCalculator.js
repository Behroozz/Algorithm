// Basic Calculare
// https://www.youtube.com/watch?v=A3noAzWZ9f4
// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:

// Input: s = "1 + 1"
// Output: 2
// Example 2:

// Input: s = " 2-1 + 2 "
// Output: 3
// Example 3:

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
// '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
// '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
// There will be no two consecutive operators in the input.
// Every number and running calculation will fit in a signed 32-bit integer.

const basicCalculator = (s) => {
  const list = s.split("");
  let output = 0;
  let current = 0;
  let sign = 1;
  let stack = [];

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item > "0" && item < "9") {
      current = item;
    } else if (item === "-" || item === "+") {
      output += current * sign;
      current = 0;
      if (item === "-") {
        sign = -1;
      } else {
        sign = 1;
      }
    } else if (item === "(") {
      stack.push(output);
      stack.push(sign);
      output = 0;
      sign = 1;
    } else if (item === ")") {
      output += current * sign;
      output *= stack.pop();
      output += stack.pop();
      current = 0;
    }
  }
  return output + current * sign;
};

const s = "(1+(4+5+2)-3)+(6+8)";

const resp = basicCalculator(s);
console.log("resp", resp);
