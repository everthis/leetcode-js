/**
 * @param {number} n
 * @param {number[]} sums
 * @return {number[]}
 */
const recoverArray = function(n, sums) {
  const res = []
  sums.sort((a, b)  => a - b)
  while(res.length < n) {
    const used = Array(sums.length).fill(false)
    const v0 = [], v1 = []
    let d = sums[1] - sums[0]
    for(let i = 0, j = 1; ;i++, j++) {
      while(i < sums.length && used[i]) i++
      if(i === sums.length) break
      while(j <= i || sums[j] !== sums[i] + d) j++
      v0.push(sums[i])
      v1.push(sums[j])
      used[i] = used[j] = true
    }
    
    if(bs(v0, 0)) {
      res.push(d)
      sums = v0
    }else {
      res.push(-d)
      sums = v1
    }
  }
  return res
};


function bs(arr, e) {
  let l = 0, r = arr.length - 1
  while(l < r) {
    const mid = ~~((l + r) / 2)
    if(arr[mid] < e) l = mid + 1
    else r = mid
  }
  
  return arr[l] === e
}

// another

/**
 * @param {number} n
 * @param {number[]} sums
 * @return {number[]}
 */
const recoverArray = function(n, sums) {
  const res = []
  sums.sort((a, b) => a - b)
  
  while(res.length < n) {
    const visited = Array(sums.length).fill(false)
    const a1 = [], a2 = []
    const d = sums[1] - sums[0]
    for(let i = 0, j = 1; i < sums.length; i++, j++) {
      while(i < sums.length && visited[i]) i++
      if(i === sums.length) break
      while(j <= i || sums[j] !== sums[i] + d) j++
      a1.push(sums[i])
      a2.push(sums[j])
      visited[i] = visited[j] = true
    }
    
    if(bs(a1, 0)) {
      sums = a1
      res.push(d)
    } else {
      sums = a2
      res.push(-d)
    }
  }
  
  return res
};

function bs(arr, val) {
  let l = 0, r = arr.length - 1
  while(l < r) {
    const mid = ~~((l + r) / 2)
    if(arr[mid] < val) l = mid + 1
    else r = mid
  }
  
  return arr[l] === val
}

// another

/**
 * @param {number} n
 * @param {number[]} sums
 * @return {number[]}
 */
const recoverArray = function(n, sums) {
  const res = []
  sums.sort((a, b) => a - b)
  
  while(res.length < n) {
    const m = sums.length, visited = Array(m).fill(false)
    let a1 = [], a2 = [], delta = sums[1] - sums[0]
    for(let i = 0, j = 1; i < m && j < m; i++, j++) {
      while(i < m && visited[i]) i++
      if(i === m) break
      while(i >= j || sums[j] !== sums[i] + delta) j++
      if(j === m) break
      a1.push(sums[i])
      a2.push(sums[j])
      visited[i] = visited[j] = true
    }
    if(binarySearch(a1, 0)) {
      sums = a1
      res.push(delta)
    } else {
      sums = a2
      res.push(-delta)
    }
  }
  return res
  
  function binarySearch(arr, val) {
    let l = 0, r = arr.length - 1
    while(l < r) {
      const mid = ~~((l + r) / 2)
      if(arr[mid] < val) l = mid + 1
      else r = mid
    }
    return arr[l] === val
  }
};
