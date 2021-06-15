/**
 * @param {string} expression
 * @return {number}
 */
function minOperationsToFlip (s) {
  const nums = []
  const ops = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') nums.push([0, 0, 1])
    else if (s[i] === '1') nums.push([1, 1, 0])
    else if (s[i] === '(') ops.push('(')
    else if (s[i] === ')') {
      while (ops.length && ops[ops.length - 1] !== '(') {
        const op = ops.pop()
        calc(op)
      }
      if (ops.length) ops.pop()
    } else {
      while (ops.length && grade(ops[ops.length - 1]) >= grade(s[i])) {
        const op = ops.pop()
        calc(op)
      }
      ops.push(s[i])
    }
  }

  while (ops.length && nums.length >= 2) {
    const op = ops.pop()
    calc(op)
  }
  const val = nums[0][0]
  return nums[0][2 - val]

  function calc (op) {
    const [x, y] = [nums.pop(), nums.pop()]
    let [z, a0, a1] = [0, 0, 0]
    switch (op) {
      case '&':
        z = x[0] & y[0]
        if (x[0] === 0 && y[0] === 0) {
          a0 = 0
          a1 = Math.min(x[2] + 1, y[2] + 1)
        }
        if (x[0] === 0 && y[0] === 1) {
          a0 = 0
          a1 = 1
        }
        if (x[0] === 1 && y[0] === 0) {
          a0 = 0
          a1 = 1
        }
        if (x[0] === 1 && y[0] === 1) {
          a0 = Math.min(x[1], y[1])
          a1 = 0
        }
        break
      case '|':
        z = x[0] | y[0]
        if (x[0] === 0 && y[0] === 0) {
          a0 = 0
          a1 = Math.min(x[2], y[2])
        }
        if (x[0] === 0 && y[0] === 1) {
          a0 = 1
          a1 = 0
        }
        if (x[0] === 1 && y[0] === 0) {
          a0 = 1
          a1 = 0
        }
        if (x[0] === 1 && y[0] === 1) {
          a0 = Math.min(x[1] + 1, y[1] + 1)
          a1 = 0
        }
        break
    }
    nums.push([z, a0, a1])
  }
  function grade (op) {
    switch (op) {
      case '(':
        return 1
      case '&':
      case '|':
        return 2
    }
    return 0
  }
};
