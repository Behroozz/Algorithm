// The Decorator pattern extends (decorates) an object’s behavior dynamically. 
// The ability to add new behavior at runtime is accomplished by a Decorator 
// object which ‘wraps itself’ around the original object. Multiple decorators 
// can add or override functionality to the original object.

// An example of a decorator is security management where business objects 
// are given additional access to privileged information depending on the privileges of the authenticated user

// use case: HOC

// Component
let User = function(name) {
  this.name = name

  this.describe = function() {
    console.log('User: ', this.name)
  }
}

// Decorator
let DecoratedUser = function(user, permission) {
  this.user = user
  this.permission = permission

  this.describe = function() {
    console.log('User:', this.user.name, 'permission:', this.permission)
  }
}

function run() {
  let user = new User('Behrooz')
  user.describe()

  let decoreted = new DecoratedUser(user, 'FullAccess')
  decoreted.describe()
}

run()

