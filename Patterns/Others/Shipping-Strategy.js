// https://www.dofactory.com/javascript/design-patterns/strategy
let Shipping = function() {
  this.company = ''
}

Shipping.prototype = {
  setStrategy: function(company) {
    this.company =  company
  },
  calculate: function(package) {
    return this.company.calculate(package)
  }
}

let UPS = function() {
  this.calculate = function(package) {
    return '1'
  }
}

let Fedex = function() {
  this.calculate = function(package) {
    return '2'
  }
}

let ups = new UPS()
let fedex = new Fedex()

const package = {}
let shipping = new Shipping()
shipping.setStrategy(ups)
console.log('UPS strategy', shipping.calculate(package))
shipping.setStrategy(fedex)
console.log('Fedex strategy', shipping.calculate(package))