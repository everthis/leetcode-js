/**
 * @param {number} finalSum
 * @return {number[]}
 */
const maximumEvenSplit = function(finalSum) {
  if(finalSum % 2 === 1) return []
  const res = []
  let i = 2
  while(i <= finalSum) {
    res.push(i)
    finalSum -= i
    i += 2
  }
  
  const last = res.pop()
  res.push(finalSum + last)
  return res
};
