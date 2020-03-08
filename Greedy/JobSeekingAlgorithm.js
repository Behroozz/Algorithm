// https://www.youtube.com/watch?v=zPtI8q9gvX8
// A list of jobs with job id, deadline and profit. And the number of jobs n.
// {('a', 2, 100), ('b', 1, 19), ('c', 2, 27), ('d', 1, 25), ('e', 3, 15)}
// n = 5
// Output:
// Following is maximum profit sequence of job sequence: c a e

// Begin
//    sort the jobs in jobList according to their profit create a list of job sequence and slot to track free time slots
//    initially make all slots are free
//    for all given jobs i do
//       for all jobs in the list from ending of the list do
//          if slot[j] is free then
//             jobSequence[j] := i
//             make slot[j] := fill
//             break the loop
//       done
//    done

//    for all slots when it is not free do
//       print id of job using jobList[jobSequence[i]]
//    done
// End


const jobList = [['a', 2, 100], ['b', 1, 19], ['c', 2, 27], ['d', 1, 25], ['e', 3, 15]]
const n = 5

function jobSeekingAlgorithm(jobList, n) {
  const maxTime = jobList.reduce((acc, curr) => {
    if(acc < curr[1]) {
      acc = curr[1]
    }

    return acc
  }, 0)

  let timeLine = []

  const sortedJobList = jobList.sort((a,b) => a[2] < b[2] )

  for(let i=0; i< sortedJobList.length; i++) {
    if(timeLine.length < maxTime) {
      if(timeLine[sortedJobList[i][1]-1] === undefined ) {
        timeLine[sortedJobList[i][1]-1] = sortedJobList[i][0] 
      } else {
        let pointer = sortedJobList[i][1] - 1

        while(pointer > -1) {
          if(timeLine[pointer] === undefined) {
            timeLine[pointer] = sortedJobList[i][0] 
            break
          }
          pointer --
        }
      }
    }
  }

  return timeLine
}

console.log(jobSeekingAlgorithm(jobList))