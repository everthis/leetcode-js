/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPermutation = function (nums) {
  const n = nums.length
  const memo = new Array(n).fill(0)
  let min = Infinity
  let res = null

  recursive([], 0)

  return res
  
  function recursive (oneCase, acc) {
    if (acc > min) return

    let flag = 0

    for (let i = 0; i < n; i += 1) {
      if (!memo[i]) {
        flag = 1
        memo[i] = 1
        oneCase.push(i)
        recursive(
          oneCase,
          oneCase.length >= 2
            ? acc +
                Math.abs(
                  oneCase[oneCase.length - 2] -
                    nums[oneCase[oneCase.length - 1]],
                )
            : acc,
        )
        memo[i] = 0
        oneCase.pop()
      }
    }

    if (!flag) {
      acc += Math.abs(oneCase[oneCase.length - 1] - nums[oneCase[0]])

      if (acc < min) {
        res = [...oneCase]
        min = acc
      }
    }
  }
}
