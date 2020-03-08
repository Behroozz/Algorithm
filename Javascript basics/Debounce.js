// What is debounce:
// Debouncing makes it so a function can only be executed after a 
// certain amount of time since it was last invoked. For example, 
// “only execute this function if it has been 1000 milliseconds 
// since it was last invoked.”

// Example:
// A common use case for debouncing is in search bars. We don’t want 
// to make expensive http requests while the user is still typing 
// their query, so we debounce the requesting function and only invoke
// it once the user has stopped typing.


function debounce(func, wait) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}


function sayHello(x) {
  console.log(x)
}

const debounceSayHello = debounce(sayHello, 100)
debounceSayHello(1)
debounceSayHello(2)
debounceSayHello(3)

setTimeout(() => debounceSayHello(4), 200)

// Example 2
function sayHelloPerson() {
  // in the first example this is global scope
  // in the second example this is amy object
  console.log('My name is ', this.name)
}

const amy = {
  name: 'amy',
  speak: debounce(sayHelloPerson)
}

amy.speak()
// My name is undefined

function improvedDebounce(fn, wait) {
  let timeout
  // change from arrow function
  return function(...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(context, args), wait)
  }
}

const amyImproved = {
  name: 'amy',
  speak: improvedDebounce(sayHelloPerson)
}

amyImproved.speak()