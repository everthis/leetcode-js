/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
const maxCompatibilitySum = function(students, mentors) {
  const n = students.length, dp = Array(1 << n).fill(-Infinity)
  const m = students[0].length
  return dfs(0, 0)
  
  function dfs(i, mask) {
    if(i === n) return 0
    if(dp[mask] !== -Infinity) return dp[mask]
    for(let j = 0; j < n; j++) {
      if((mask & (1 << j)) === 0) {
         dp[mask] = Math.max(dp[mask], calc(i, j) + dfs(i + 1, mask | (1 << j)))
      }
    }
    
    return dp[mask]
  }
  
  function calc(i, j) {
    let res = 0
    const a = students[i], b = mentors[j]
    for(let k = 0; k < m; k++) {
      if(a[k] === b[k]) res++
    }
    return res
  }
};


// another

/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
const maxCompatibilitySum = function(students, mentors) {
  const obj = { res: 0 }, hash = {}
  bt(students, mentors, 0, 0, obj, hash)

  return obj.res
};

function bt(stu, men, i, score, obj, hash) {

  if(i === stu.length) {
    if(score > obj.res) {
      obj.res = score
    }
    return
  }
  
  for(let j = 0; j < men.length; j++) {
    const k = `${j}`
    if(hash[k] === 1) continue
    hash[k] = 1
    bt(stu, men, i + 1, score + calc(stu[i], men[j]), obj, hash)
    delete hash[k]
  }
}

function calc(a1, a2) {
  const n = a1.length
  let res = 0
  for(let i = 0; i < n; i++) {
    if(a1[i] === a2[i]) res++
  }
  return res
}
