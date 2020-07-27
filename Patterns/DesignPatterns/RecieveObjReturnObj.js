// https://medium.com/free-code-camp/elegant-patterns-in-modern-javascript-roro-be01e7669cbd
// function findUsersByRole(
//   role
// ) --> users

// // all the users with the role that have contact information

// function findUsersByRole(
//   role,
//   withContactInfo
// )

// // Exclude inactive users

// function findUsersByRole(
//   role,
//   withContactInfo,
//   includeActiveUser
// )

// findUsersByRole('Admin', true, true)

// findUsersByRole('Admin', null, true)

// it is Bad
// so what we can do to improve?

// findUserByRole({
//   role,
//   withContactInfo,
//   includeActiveUser
// })
// -->
// findUserByRole({
//   role: 'admin',
//   withContactInfo: true,
//   includeActiveUser: false
// })

// what if you want to have default values

// Better
// findUserByRole({
//   role,
//   withContactInfo=true,
//   includeActiveUser
// })

// Bad
// function findUserByRole({
//   role,
//   withContactInfo=true,
//   includeActiveUser
// }) {
//   if(role === null) {
//     throw Error('Please provide a role')
//   }
// }


// Error Handling
// function requiredParam (param) {
//   const requiredParamError = new Error(
//     `Required parameter, ${param} is missing`
//   )

//   if(typeof Error.captureStackTrace === 'function') {
//     Error.captureStackTrace(
//       requiredParam,
//       requiredParamError
//     )
//   }

//   throw requiredParamError
// }

// function findUserByRole({
//   role = requiredParam('role'),
//   withContactInfo=true,
//   includeActiveUser
// }) {

// }

// findUserByRole({ includeActiveUser: false})




function pipe(...fns) {
  return param => fns.reduce(
    (result, fn) => fn(result),
    param
  )
}

let db = []

function saveUser(userInfo) {
  return pipe(
    validate,
    normalize,
    persist
  )(userInfo)
}

function validate({
  id,
  ...rest
}) {
   if(id > 1) {
     console.log('Valid')
   } else {
     console.log('Invalid')
     throw new Error('Please provide valid Id')
   }  
   return {
     id,
     ...rest
   }
}

function normalize({
  name,
  ...rest
}) {
  const newName = name.toUpperCase()
  return {
    name: newName,
    ...rest
  }
}

function persist({
  name,
  age,
  salary, 
  ...rest
}) {
  db.push({
    name, age, salary
  })

  return {
    operation: 'Insert',
    status: 'Success',
    added: {
      name,
      age,
      salary,
      rest
    }
  }
}

const result = saveUser({
  id: 2,
  name: 'Behrooz',
  age: 30,
  salary: 200
})

console.log('result', result)