/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
  const arr = []
  for (let i = 0, len = pushed.length; i < len; i++) {
    if (!helper(arr, pushed, popped)) return false
  }
  return true
}

function helper(arr, pu, po) {
  let target = po[0]

  while (arr.length || pu.length) {
    let curP = pu[0]
    if (curP === target) {
      po.shift()
      pu.shift()
      return true
    } else if (arr.length && arr[arr.length - 1] === target) {
      arr.pop()
      po.shift()
      return true
    } else {
      if (curP == null) {
        return false
      } else {
        arr.push(curP)
        pu.shift()
      }
    }
  }
  return false
}
