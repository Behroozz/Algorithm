const fs = require('fs')
// fs.readFile('./test.text', 'utf8', (error, data) => {
//   if(error) {
//     console.log(error)
//   }
//   console.log(typeof data)
//   console.log(data)
// })

// const readline = require('readline')

// const readInterface = readline.createInterface({
//   input: fs.createReadStream('./test.txt'),
//  // output: process.stdout,
// //  console: false
// })

// readInterface.on('line', function(line) {
//   console.log('line::::::', line)
// })

// JSON read and write
// const readFile = async () => {
//   try {
//     let data = await fs.promises.readFile('./test.json')
//     const users = JSON.parse(data)
//     return users
//   } catch(err) {
//     console.log(err)
//   }
// }


// const writeFile = async () => {
//   try {
//     let users = await readFile()
//     console.log('users', users)
//     const result = await fs.promises.writeFile('./test.json', 
//     JSON.stringify([
//       ...users,
//       { name: '4'}
//     ]))
//     console.log(result)
//   } catch(err) {

//   }
// }

// writeFile()


// Read 5 char at the time
// const readable = fs.createReadStream("./test.txt", {
//   encoding: "utf8",
//   fd: null
// })

// readable.on('readable', function() {
//   let chunk 
//   while((chunk = readable.read(5))) {
//     console.log('chunk', chunk)
//   }
// })


