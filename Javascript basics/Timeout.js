// https://javascript.info/settimeout-setinterval

// SetTimeout
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

function sayHi(name, age) {
  console.log('name', name)
  console.log('age', age)
}

let timeId = setTimeout(sayHi, 3000, 'Behrooz', 35)
// console.log('timeId', timeId)


let timeId2 = setTimeout(() => sayHi('Bruce', 11), 2000)
// console.log('timeId2')
// it will never happen
clearTimeout(timeId2)


// SetInterval
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
// Run regularly

let intervalId = setInterval(sayHi, 1000, 'Behrooz', 35)
clearInterval(intervalId)