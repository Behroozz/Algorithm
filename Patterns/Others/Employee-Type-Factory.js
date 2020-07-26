function Factory() {
  this.createEmployee = function(type) {
    let employee

    switch(type) {
      case 'fullTime': {
        employee = new FullTime()
        break
      }
      case 'partTime': {
        employee = new PartTime()
        break
      }
      default: {
        break
      }
    }
    return employee
  }

  let FullTime = function() {
    console.log('Full time')
  }


  let PartTime = function() {
    console.log('Part time')
  }
}

let factory = new Factory()
factory.createEmployee('fullTime')
factory.createEmployee('partTime')