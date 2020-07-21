// Clean Architecture Bob Martin




//  |   frameworks and drivers we use to build application, express, mongodb,...
//  |   Adapter to isolate various use cases from the tools that we use
//  |   User Cases interaction between entities (add product to card, place order)
//  >   Entities (Primary concept of business) (Order, product,..)

// Outer circle can come from outer circle to inner circle
// Things that most likely to change overtime in the outside
// Things that less likely to change overtime inside

// stand the time
// But what if the use case is place order
// that require to talk to framework layer to store in DB

// solution:

// Presenter ---> Use Case Output Port (Interface)
//                Use Case Interactor
// Controller --> Use Case Input Port  (Interface)
    

// Entity -> Comment folder
// Comment.js


// no import or require statement at top of the page 
// in entity
// but we do Dependency Injection
// Advantage:
// 1) testability, code can be tested Independently
// 2) We can change the implementation detail of dependencies without changing the business logic
// example sanitize is an npm package that we can pass without knowing how it is implemented






