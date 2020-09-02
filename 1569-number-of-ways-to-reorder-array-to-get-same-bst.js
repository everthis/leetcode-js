/**
 * @param {number[]} nums
 * @return {number}
 */
const numOfWays = function (nums) {
  let root = null
  let cache = new Map()

  const MOD = BigInt(10 ** 9 + 7)
  for (let n of nums) {
    root = insert(root, n)
  }

  // f(root) -> [length, combination]
  function f(root) {
    if (!root.left && !root.right) {
      return [1n, 1n]
    }
    let [ll, lc] = [0n, 1n]
    let [rl, rc] = [0n, 1n]
    if (root.left) {
      ;[ll, lc] = f(root.left)
    }
    if (root.right) {
      ;[rl, rc] = f(root.right)
    }
    // ((ll + rl)! / (ll! * rl!)  )* lc * rc
    return [
      ll + rl + 1n,
      (factorial(ll + rl) / factorial(ll) / factorial(rl)) * lc * rc,
    ]
  }

  return (f(root)[1] - 1n) % MOD

  function Node(val) {
    this.val = val
    this.left = this.right = null
  }

  function insert(root, val) {
    if (!root) {
      return new Node(val)
    }
    if (root.val > val) {
      root.left = insert(root.left, val)
    } else if (root.val < val) {
      root.right = insert(root.right, val)
    }
    return root
  }

  function factorial(n) {
    if (n == 0n) {
      return 1n
    }
    if (cache.has(n)) {
      return cache.get(n)
    }
    let ans = 1n
    for (let i = 2n; i <= n; i++) {
      ans *= i
      cache.set(i, ans)
    }
    return ans
  }
}
