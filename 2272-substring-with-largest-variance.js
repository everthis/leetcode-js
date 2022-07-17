/**
 * @param {string} s
 * @return {number}
 */
const largestVariance = function (s) {
  const freq = new Array(26).fill(0)
  const ac = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) freq[s.charCodeAt(i) - ac]++

  // console.log(freq)
  let maxVariance = 0
  for (let a = 0; a < 26; a++) {
    for (let b = 0; b < 26; b++) {
      let remainingA = freq[a]
      let remainingB = freq[b]
      if (a == b || remainingA == 0 || remainingB == 0) continue

      // run kadanes on each possible character pairs (A & B)
      let currBFreq = 0,
        currAFreq = 0
      for (let i = 0; i < s.length; i++) {
        let c = s.charCodeAt(i) - ac

        if (c == b) currBFreq++
        if (c == a) {
          currAFreq++
          remainingA--
        }
        if (currAFreq > 0) {
          maxVariance = Math.max(maxVariance, currBFreq - currAFreq)          
        }


        if (currBFreq < currAFreq && remainingA >= 1) {
          currBFreq = 0
          currAFreq = 0
        }
      }
    }
  }

  return maxVariance
}
