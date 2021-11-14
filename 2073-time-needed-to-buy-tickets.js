/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = function(tickets, k) {
  let res = 0
  
  while(tickets[k] !== 0) {
    res += helper(tickets, k)
  }
  
  return res
  
  function helper(arr, k) {
    let tmp = 0
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
        arr[i]--
        tmp++
      }
      if(arr[k] === 0) break
    }
    return tmp
  }
  
};
