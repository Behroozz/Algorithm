# AlgoCasts

Solved version:
https://github.com/StephenGrider/algocasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

How to Debug
// add debugger to the code
//node inspect index.js  
//c
//repl

# Learning

- use in for iterating over object
- in the for loop we can remove space or lowercase
  - for(char in str.replace(/[^\w]/g), "").toLowerCase())
- we can create map of object like:
  - for(char in str) {
    - charMap[char] = charMap[char] + 1 || 1
    - }
- in every((char, index) => char === str[str.length - 1 - index]) we can compare start and end
- in the while loop to get the chunk
  while (index < array.length) {
  result.push(array.slice(index, index + size));
  index += size;
- to compare to object we compare length of theit keys and then loop through them with in and make sure the values for same ley is equal

- let char of str.split(" ") we get all the words

- char[0].toUpperCase() + char.slice(1) --> to make a capital words
-
