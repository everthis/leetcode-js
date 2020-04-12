/**
 * @param {number[]} nums
 * @return {number}
 */
const pathSum = function (nums) {
  const arr = Array(1 << 5).fill(-1)
  for (let num of nums) {
    let [lvl, pos, val] = [
      parseInt(num / 100),
      parseInt((num % 100) / 10),
      num % 10,
    ]
    arr[(1 << (lvl - 1)) - 1 + pos - 1] = val
  }
  let sum = 0
  for (let i = 0; i < 1 << 4; i++) {
    if (arr[i] !== -1) {
      arr[i] += i > 0 ? arr[parseInt((i - 1) >> 1)] : 0
      if (arr[i * 2 + 1] === -1 && arr[i * 2 + 2] === -1) {
        sum += arr[i]
      }
    }
  }
  return sum
}
