const fs = require('fs')

const  readFile = async () => {
  try {
    let hashMap = {}
    const data = await fs.promises.readFile('./test.txt', 'utf-8')
    const dataArray =  data.split(' ').map(word => trim(word))
    // console.log('dataArray: ', dataArray)
    for(let i=0; i< dataArray.length; i++) {
      const current = dataArray[i]
      hashMap[current] = !hashMap[current] ? 1 : hashMap[current]+1
    }
    const anagrams = getAnagrams(dataArray)
    console.log('anagrams', anagrams)
    // console.log(hashMap)
  } catch(ex) {
    console.log('ex', ex)
  }
}

const trim = (str) => {
  return str.replace(/['",.\n]+/g, '')
}

const getAnagrams = (arr) => {
  let anagramMap = {}
  arr.forEach(word => {
    const sortedWord = word.toLowerCase().split('').sort().join('')
    if(!anagramMap[sortedWord]) {
      anagramMap[sortedWord] = []
    }
    anagramMap[sortedWord].push(word)
  })
  return Object.values(anagramMap).reduce((acc, value) => {
    if(value.length > 1) {
      acc.push(value)
    }
    return acc
  }, [])
}

// readFile()

const readable = fs.createReadStream('./test.txt', {
  encoding: 'utf-8'
})


const readFileN = (n) => {
  console.log(n)
  try {
    let chunk
    readable.on('readable', () => {
      while((chunk = readable.read(n)) !== null) {
        console.log('chunk', chunk)
      }
    })
  } catch(ex) {
    console.log('error', ex)
  }
}

readFileN(5)









































