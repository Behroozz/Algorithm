const data  = {
  overallSale: 16,
  items: [
    { sale: 1 , date: '1995-12-17T01:00:00'},
    { sale: 2 , date: '1995-12-17T02:00:00'},
    { sale: 1 , date: '1995-12-17T04:00:00'},
    { sale: 4 , date: '1995-12-18T01:00:00'},
    { sale: 5 , date: '1995-12-18T02:00:00'},
    { sale: 2 , date: '1995-12-18T03:00:00'},
    { sale: 1 , date: '1995-12-19T04:00:00'}
  ]
}

function getFeqPerDay(data) {
  let acc = {}
  // let sum = 0
  // for(let i=0; i< data.items.length; i++) {
  //   let curr = data.items[i]
  //   const day = new Date(curr.date).getDate()
  //   if(!acc[day] && acc[day] !== 0) {
  //     acc[day] = sum
  //   }
  //   sum += curr.sale
  // }
  let sum = data.overallSale
  for(let i=data.items.length-1; i >= 0; i--) {
    let curr = data.items[i]
    const day = new Date(curr.date).getDate()
    sum -= curr.sale
    acc[day] = sum
  }

  return acc
}

const result = getFeqPerDay(data)
console.log('result', result)
