class ConvexHullTrick {
  constructor() {
    this.lines = []
    this.pointer = 0
  }

  addLine(m, b) {
    const newLine = { m, b, xLeft: 0 }
    while (this.lines.length > 0) {
      const last = this.lines[this.lines.length - 1]
      const x = this.intersect(newLine, last)
      if (x <= last.xLeft) {
        this.lines.pop()
      } else {
        break
      }
    }
    if (this.lines.length === 0) {
      newLine.xLeft = -Infinity
    } else {
      newLine.xLeft = this.intersect(newLine, this.lines[this.lines.length - 1])
    }
    this.lines.push(newLine)
  }

  query(x) {
    if (this.pointer >= this.lines.length) this.pointer = this.lines.length - 1
    while (
      this.pointer < this.lines.length - 1 &&
      this.lines[this.pointer + 1].xLeft <= x
    ) {
      this.pointer++
    }
    return this.lines[this.pointer].m * x + this.lines[this.pointer].b
  }

  intersect(line1, line2) {
    return (line2.b - line1.b) / (line1.m - line2.m)
  }
}

function minimumCost(nums, cost, k) {
  const n = nums.length
  const preNum = new Array(n + 1).fill(0)
  const preCost = new Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    preNum[i + 1] = preNum[i] + nums[i]
    preCost[i + 1] = preCost[i] + cost[i]
  }

  const inf = Number.MAX_SAFE_INTEGER / 2
  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(inf))
  dp[0][0] = 0

  for (let j = 1; j <= n; j++) {
    const cht = new ConvexHullTrick()
    for (let l = j - 1; l < n; l++) {
      if (dp[l][j - 1] < inf) {
        cht.addLine(-preCost[l], dp[l][j - 1])
      }
    }
    for (let i = j; i <= n; i++) {
      const query = cht.query(preNum[i] + k * j)
      dp[i][j] = (preNum[i] + k * j) * preCost[i] + query
    }
  }

  let ans = inf
  for (let j = 1; j <= n; j++) {
    ans = Math.min(ans, dp[n][j])
  }
  return ans
}
