// Lexical Scoping

// Function Scope
// Each function create new scope

// Global Scope

// Local Scope
  // Function Scope ---> var
  // Block Scope --> const(can not be reassigned), let
  // if, switch, for, while

// Example:  
// function scope(){
//   if(true){
//       var scope1 =`I have function Scope`
//       let scope2 = `I have block scope`
//       const scope3 =`I also have block scope`
//   }
//   console.log(scope1)
//   console.log(scope2)
//   console.log(scope3)
//   }
// scope()

//I have function Scope
//ReferenceError: scope2 is not defined
//ReferenceError: scope3 is not defined


// Call vs Apply vs Bind
// Call: invokes a function and allow to pass arguments one by one (Comma separated args)
// Apply invokes a function and allow to pass arguments as an array (Array)
// Bind return a new function, it will not execute it, and you can pass any number of args  
// (For on click since it will not get invoked)

// call(thisArg, arg1, arg2, ...)
// apply(thisArg, argsArray)
// bind(thisArg[, arg1[, arg2[, ...]]])

let person = {
  firstName: 'Behrooz',
  lastName: 'Tabesh'
}

function describe(id, permission) {
  console.log(`id: ${id} permission: ${permission} firstName: ${this.firstName} lastName: ${this.lastName}`)
}

describe.call(person, 1, 'full access')
describe.apply(person, [1, 'full access'])

describePerson = describe.bind(person)
describePerson(1, 'full access')


