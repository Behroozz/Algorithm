// https://medium.com/free-code-camp/code-dependencies-are-the-devil-35ed28b556d
// https://www.dofactory.com/javascript/design-patterns/adapter

// Several years ago, my go-to solution for overcoming the risks 
// while retaining the benefits of third-party-libraries was 
// to wrap them using the Adapter Pattern.

// Essentially, you wrap the third party code in an adapter class 
// or module that you’ve written. This then works to expose the 
// functions of the third party libraries in a manner that you 
// control.
// Using this pattern, if a third-party library or framework 
// changes, or goes away, you only have to fix a bit of adapter 
// code. The rest of your app stays intact.

// Client ---> Adapter ---> Adaptee
//             (request)   specificRequest()



// initially the API was shipping
function Shipping() {
  this.request = function(zipCode, weight) {
    // do something
    return "49.90$"
  }
}

// now the API changes
function AdvancedShipping() {
  this.login = function(credential) {
    return true
  }
  this.calculate = function(zipCode, weight) {
    return "39.90$"
  }
}

function ShippingAdapter(credential) {
  const shipping = new AdvancedShipping()

  shipping.login(credential)
  return {
    request: (zipCode, weight) => {
      return shipping.calculate(zipCode, weight)
    }
  }
}

// Client make call run() 
// Adapter implemented an interface that client knows
// Adaptee has a different interface and implementation

function run() {
  const shipping = new Shipping()
  const cost = shipping.request('123', 20)
  console.log('cost', cost)

  const adapter = new ShippingAdapter({token: 'abc'}) 
  const newCost = adapter.request('123', 20)
  console.log('newCost', newCost)
}

run()