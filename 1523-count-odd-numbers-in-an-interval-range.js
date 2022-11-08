/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function(low, high) {
  let res = 0
  
  const odd = num => num % 2 === 1
  if(odd(low)) res++
    
  const num = Math.floor( (high - low) / 2 )
  res += num
  
  if(high > low + 2 * num && odd(high)) res++
  
  return res
};
