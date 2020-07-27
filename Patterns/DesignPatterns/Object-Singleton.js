// https://www.dofactory.com/javascript/design-patterns/singleton
let singleton = (function () {
  let instance
  function createSingleton() {
    let obj = new Object('I am the instance')
    return obj
  }
  return {
    getInstance: function() {
      if(!instance) {
        instance = createSingleton()
      }
        return instance
    }
  } 
})()

const instance1 = singleton.getInstance()
const instance2 = singleton.getInstance()
console.log('instance1', instance1)
console.log('instance2', instance2)

console.log('Same instance', instance1 === instance2)