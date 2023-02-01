const median = (array) => {
  array.sort((a, b) => a - b);
  let half = Math.floor(array.length / 2);

  if (array.length % 2) {
    return array[half];
  } else {
    return (array[half - 1] + array[half]) / 2;
  }
};

const res1 = median([2, 4, 6, 1]);
console.log(res1);

const res2 = median([4, 2, 7, 6, 1]);
console.log(res2);
