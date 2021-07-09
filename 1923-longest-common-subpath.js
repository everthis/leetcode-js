/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number}
 */
const longestCommonSubpath = function(n, paths) {
  if (!paths.length) return 0
  let arr = paths[0]
  for (const path of paths) if (path.length < arr.length) arr = path
  return new Sam(arr).longestCommonSubpath(paths)  
};

class State {
  constructor(len, link, next) {
    this.len = len
    this.link = link
    this.next = new Map(next)
    this.ans = len
    this.revLink = []
    this.max = 0
  }
}

/**
 * @param p {State}
 * @return boolean
 */
function dfs(p) {
  let hasNext = false
  for (const q of p.revLink) {
    hasNext = dfs(q) || hasNext
  }
  if (hasNext) p.max = p.len
  return p.max > 0
}

class Sam {
  newState(len, link, next) {
    const state = new State(len, link, next)
    this.container.push(state)
    return state
  }

  constructor(path) {
    this.container = []
    const root = this.newState(0, null)
    let last = root
    for (const x of path) {
      const cur = this.newState(last.len + 1, root)
      for (let p = last; p; p = p.link) {
        const q = p.next.get(x)
        if (!q) {
          p.next.set(x, cur)
          continue
        }
        if (q.len === p.len + 1) {
          cur.link = q
        } else {
          const clone = this.newState(p.len + 1, q.link, q.next)
          for (; p && p.next.get(x) === q; p = p.link) p.next.set(x, clone)
          cur.link = q.link = clone
        }
        break
      }
      last = cur
    }
    for (const state of this.container)
      if (state.link) state.link.revLink.push(state)
  }

  visit(path) {
    for (const state of this.container) state.max = 0
    const root = this.container[0]
    let p = root
    let len = 0
    for (const x of path) {
      for (; ; p = p.link, len = p.len) {
        const q = p.next.get(x)
        if (q) {
          p = q
          p.max = Math.max(p.max, ++len)
          break
        }
        if (!p.link) break
      }
    }
    dfs(root)
    for (const state of this.container)
      state.ans = Math.min(state.ans, state.max)
  }

  longestCommonSubpath(paths) {
    for (const path of paths) this.visit(path)
    let ans = 0
    for (const state of this.container) ans = Math.max(ans, state.ans)
    return ans
  }
}
