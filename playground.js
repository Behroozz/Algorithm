function Shipping() {
  this.request = (weight, zip) => {
    // do something
   return "10$" 
  }
}

function AdvancedShipping() {
  this.login = (credential) => {
    return true
  }

  this.calculate = (weight, zip) => {
    return "9.99$"
  }
}

function ShippingAdapter(credential) {
  const shipping = new AdvancedShipping()
  shipping.login(credential)

  this.request = (weight, zip) => {
    return shipping.calculate(weight, zip)
  }
}

function run() {
  const myShipping = new Shipping()
  const res1 = myShipping.request(10, 123)
  console.log('res1', res1)

  const myAdvShipping = new ShippingAdapter()
  const res2 = myAdvShipping.request(10, 123)
  console.log('res2', res2)
}

run()