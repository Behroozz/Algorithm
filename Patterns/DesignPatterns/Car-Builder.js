// The Builder pattern allows a client to construct a complex object by specifying the type and content only. 
// Construction details are hidden from the client entirely.

// practical use case
// function buttonBuilder() {
//   this.construct = function(builder) {
//     builder.initialize()
//     builder.setTheme()
//   }
// }

// Director
function Shop() {
  this.construct = function(builder) {
    builder.step1()
    builder.step2()
    return builder.get()
  }
}

// ConcreteBuilder
function CarBuilder() {
  this.car = null
  this.step1 = function() {
    this.car = new Car()
  }
  this.step2 = function() {
    this.car.addParts()
  }
  this.get = function() {
    return this.car
  }
}

// ConcreteBuilder
function TruckBuilder() {
  this.truck = null
  this.step1 = function() {
    this.truck = new Truck()
  }
  this.step2 = function() {
    this.truck.addParts()
  }
  this.get = function() {
    return this.truck
  }
}

// Product
function Car() {
  this.doors = 0
  this.addParts = function() {
    this.doors = 4
  }
  this.describe = function() {
    return `This car have ${this.doors} doors`
  }
}

// Product
function Truck() {
  this.doors = 0
  this.addParts =function() {
    this.doors = 6
  }
  this.describe = function() {
    return `This car have ${this.doors} doors`
  }
}

function run() {
  const shop = new Shop()
  const carBuilder = new CarBuilder()
  const truckBuilder = new TruckBuilder()

  let car = shop.construct(carBuilder)
  let truck = shop.construct(truckBuilder)

  console.log('car.describe()', car.describe())
  console.log('truck.describe()', truck.describe())
}

run()