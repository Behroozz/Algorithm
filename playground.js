function schedule(tasks, cooldown) {
  let duplicates = []
  let map = {}
  for(let i=0; i< tasks.length; i++) {
    let current = tasks.charAt(i)
    if(!map[current]) {
      map[current] = 1
    } else {
      duplicates.push(current)
    }
  }
  
  let counter 

  for(let i=0; i< tasks.length; i++) {
    let current = tasks.charAt(i)

    if(duplicates.includes(current)) {
      counter = 0
      let j = i + 1
      while(cooldown !== 0 && tasks[j] !== current) {
        j +=1
        console.log('tasks[j]', tasks[j])
        console.log('cooldown', cooldown)
        
        if(tasks[j] === undefined && cooldown !== 0) {
          console.log('inset .')
          tasks = tasks.slice(0, j-1) + '.' + tasks.slice(j-1)
          console.log('tasks', tasks)
        } 
        cooldown -=1
      }
    } else {

    }
  }
  console.log('tasks', tasks)
}


// Given an string --> chars --> tasks
// cooldown k 

// return string padded with .
// k task between duplicates

console.log(schedule('aba', 2) === 'ab.a')
// console.log(schedule('abca', 2) === 'abca')
// console.log(schedule('aabb', 2) === 'a..ab..b')
// console.log(schedule('acbab', 3) === 'acb.a.b')