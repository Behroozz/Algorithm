// A function that create and return a frozen object
// https://medium.com/free-code-camp/elegant-patterns-in-modern-javascript-ice-factory-4161859a0eee

function makeProductList({
  db
}) {
  const secretKey = "123"
  return Object.freeze({
    addProduct,
    empty,
    getProducts,
  })

  function addProduct(product) {
    db.push(product)
  }

  function empty () {
    if(secretKey === '123') {
      db = []
    }
  }

  function getProducts() {
    return Object.freeze([...db])
  }
}

function makeShoppingCart({productList}) {
  return Object.freeze({
    items: productList
  })
}

const db = []
const productList = makeProductList({ db })
productList.addProduct({
  name: "Toaster",
  price: 56
})

console.log('secretKey', productList.secretKey)
// Is not working
// cart.addProduct = () => "nope"
const products = productList.getProducts()
console.log('products', products)

const cart = makeShoppingCart({productList})
console.log('cart', cart)
cart.items.addProduct({
  name: 'AirFryer',
  price: 200
})

console.log('products', productList.getProducts())



