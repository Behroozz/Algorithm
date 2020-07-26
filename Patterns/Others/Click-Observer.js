// https://www.dofactory.com/javascript/design-patterns/observer
// The Observer pattern offers a subscription model in which objects subscribe to an event and get notified when the event occurs

// The event and event-handler paradigm in JavaScript is the manifestation of the Observer design pattern

// Subject --> Click
// Observer --> ClickHandler

function Click() {
  this.handlers = []
}

Click.prototype = {
  subscribe: function(fn) {
    this.handlers.push(fn)
  },
  unSubscribe: function() {

  },
  fire: function(args) {
    this.handlers.forEach(item => item.call(this, args))
  }
}

let clickHandler = function(item) {
  console.log('Fired: ', item)
}

let click = new Click()
click.subscribe(clickHandler)
click.fire('Event 1')
click.fire('Event 2')