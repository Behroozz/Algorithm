// const pow = (x, n) => {
//   if (n === 1) {
//     return x;
//   }
//   return pow(x, n - 1) * x;
// };

// const a = pow(2, 3);
// a;

let departments = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

getSalerySum = (departments) => {
  if (Array.isArray(departments)) {
    return departments.reduce((acc, curr, index) => {
      acc += curr.salary;
      return acc;
    }, 0);
  } else {
    let sum = 0;
    for (department of Object.values(departments)) {
      sum += getSalerySum(department);
    }
    return sum;
  }
};

const result = getSalerySum(departments);

console.log(result);

// fn({sales:[{name:John,salary:1000},{name:Alice,salary:1600}],development:{sites:[{name:Peter,salary:2000},{name:Alex,salary:1800}],internals:[{name:Jack,salary:1300}]}})

//   fn([{name:John,salary:1000},{name:Alice,salary:1600}]) --> 2600 --> // to main function

//   fn({sites:[{name:Peter,salary:2000},{name:Alex,salary:1800}],internals:[{name:Jack,salary:1300}]})

//           fn({[{name:Peter,salary:2000},{name:Alex,salary:1800}]}) --> // to second function 3800
//           fn([{name:Jack,salary:1300}]) --> // to second function 1300

// main function 7700
// 2600                             -
// 3800              //1300
