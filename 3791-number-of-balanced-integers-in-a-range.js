/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countBalanced = function(low, high) {
    
  return upTo(high) - upTo(low - 1)

  function upTo(num) {
      const str = num + ''
      const memo = new Map()
      return digDp(0,0,true, str, memo)
  }
  function digDp(pos, balance, isTight, numStr, memo) {
    if(pos === numStr.length) return balance === 0 ? 1 : 0
    const key = `${pos},${balance},${isTight}`
    if(memo.has(key)) return memo.get(key)

    const limit = isTight ? Number(numStr[pos]) : 9

      
      let res = 0

      for(let digit = 0; digit <= limit; digit++) {
          let newBalance = balance
          if((pos + 1) % 2 === 1) {
              newBalance += digit
          } else {
              newBalance -= digit
          }
          res += digDp(pos + 1, newBalance, isTight && (digit === limit), numStr, memo)
      }

      memo.set(key, res)

      return res
  }
};
