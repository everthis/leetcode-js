/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
const smallestSufficientTeam = function(req_skills, people) {
  const m = req_skills.length
  const n = people.length
  const skill2Bitmap = req_skills
    .map((x, i) => [x, i])
    .reduce((dict, cur) => {
      dict[cur[0]] = 1 << cur[1]
      return dict
    }, {})
  const newPeople = people.map(x => {
    return x.reduce((acc, cur) => {
      const y = skill2Bitmap[cur]
      if (y !== undefined) {
        acc |= y
      }
      return acc
    }, 0)
  })

  const all = (1 << m) - 1
  const dp = {}
  for (let j = 0; j < n; j++) {
    if (newPeople[j] > 0) {
      dp[newPeople[j]] = new Set([j])
    }
  }
  if (dp[all]) {
    return Array.from(dp[all]).sort()
  }

  for (let k = 0; k < n; k++) {
    for (let s in dp) {
      for (let j = 0; j < n; j++) {
        if (newPeople[j] === 0 || dp[s].has(j)) continue
        const newIdx = s | newPeople[j]
        if (dp[newIdx] === undefined) {
          dp[newIdx] = new Set([...dp[s], j])
          if (newIdx === all) {
            return Array.from(dp[all]).sort()
          }
        }
      }
    }
  }
  return []
}

// another

/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
const smallestSufficientTeam = function(req_skills, people) {
  let skill_len = req_skills.length

  // 将people转换为id的模式
  let id_people = []
  let hash = {}
  for (let i = 0; i < skill_len; i++) {
    hash[req_skills[i]] = i
  }
  for (let i = 0; i < people.length; i++) {
    id_people[i] = []
    for (let j = 0; j < people[i].length; j++) {
      id_people[i][j] = hash[people[i][j]]
    }
  }

  // 过滤掉不可能的选取的人员
  let skip = {}
  for (let i = 0; i < id_people.length; i++) {
    if (skip[i]) continue
    let skills = Array(skill_len).fill(0)
    for (let j = 0; j < id_people[i].length; j++) {
      let curId = id_people[i][j]
      skills[curId]++
    }
    for (let k = i + 1; k < id_people.length; k++) {
      if (skip[k]) continue
      let needSkip = true
      for (let l = 0; l < id_people[k].length; l++) {
        let id = id_people[k][l]
        if (skills[id] === 0) {
          needSkip = false
          break
        }
      }
      if (needSkip) {
        skip[k] = true
      }
    }
  }

  // 构造精简后的人员，并且保存对应的index关系
  let slim_people = []
  let idHash = {}
  for (let i = 0; i < id_people.length; i++) {
    if (skip[i]) continue
    idHash[slim_people.length] = i
    slim_people.push(id_people[i])
  }

  // 执行回溯
  let res = Infinity
  let remain = {}
  let ans = null
  for (let i = 0; i < slim_people.length; i++) {
    remain[i] = false
  }
  let init_select = Array(skill_len).fill(0)

  backtrack(0, init_select, 0, remain)

  return ans

  function backtrack(id, select, count, remain) {
    if (count >= res) return
    let done = true
    for (let i = 0; i < select.length; i++) {
      if (select[i] === 0) {
        done = false
      }
    }
    if (done) {
      res = count
      let _res_ = []
      for (let k in remain) {
        if (remain[k]) _res_.push(idHash[k])
      }
      ans = _res_
      return
    }
    for (let k = id; k < slim_people.length; k++) {
      let arr = slim_people[k]
      for (let i = 0; i < arr.length; i++) {
        select[arr[i]]++
      }
      remain[k] = true
      backtrack(k + 1, select, count + 1, remain)
      remain[k] = false
      for (let i = 0; i < arr.length; i++) {
        select[arr[i]]--
      }
    }
  }
}

