/**
 * @param {number[]} digits
 * @return {number[]}
 */
const findEvenNumbers = function(digits) {
  const set = new Set(), visited = new Set()
  helper(0, [])
  const res = Array.from(set)
  res.sort((a, b) => a - b)
  return res
  
  function helper(idx, cur) {
    if(cur.length === 3) {
      set.add(+cur.join(''))
      return
    }
    for(let i = 0; i < digits.length; i++) {
      if(visited.has(i)) continue
      const d = digits[i]
      if(d === 0) {
        if(cur.length === 0) continue
        else {
          cur.push(d)
          visited.add(i)
          helper(i + 1, cur)
          visited.delete(i)
          cur.pop()
        }
      } else {
        const isEven = d % 2 === 0
        if(cur.length === 3 - 1) {
          if(isEven) {
            cur.push(d)
                      visited.add(i)
            helper(i + 1, cur)
                      visited.delete(i)
            cur.pop()
          } else continue
        } else {
           cur.push(d)
                    visited.add(i)
            helper(i + 1, cur)
                    visited.delete(i)
            cur.pop()
        }
      }
    }
  }
};
