let data = [1,2,3,4,3,2,1,4,5,1]

const averageOfFrequency = (data) => {
  let hashMap = {}

  data.map((ip) => {
    if(!hashMap[ip]) {
      hashMap[ip] = 1
    } else {
      hashMap[ip] +=1
    }
  })

  return {
    ips: (Object.keys(hashMap).map(item => parseInt(item))),
    freq: Object.values(hashMap)
  }
}


const averageFreq = averageOfFrequency(data)
console.log('averageFreq', averageFreq)

const meanOfIps = (freq) => {
  freq.reduce((acc, curr, index) => {
    acc += curr
    if(index+1 === freq.length) {
      console.log('index', index)
      console.log('acc', acc)
      acc = acc / index + 1
    }
    return acc
  }, 0) 
}

const freqMean = meanOfIps(averageFreq.freq)


console.log('freqMean', freqMean)


const result = [1,2,3].reduce((acc, curr) => {
  acc += curr
  return acc
}, 0)

console.log('result', result)