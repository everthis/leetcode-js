/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
  const props = properties, n = props.length, maxDefFromRight = Array(n)
  props.sort((a, b) => a[0] - b[0])
  for(let max = 0, i = n - 1; i >= 0; i--) {
    max = Math.max(max, props[i][1])
    maxDefFromRight[i] = max
  }
  let res = 0
  
  for(let i = 0; i < n; i++) {
    const cur = props[i]
    let l = i, r = n
    while(l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if(props[mid][0] > props[i][0]) r = mid
      else l = mid + 1
    }
    
    if(l < n && maxDefFromRight[l] > props[i][1]) {
      res++   
    }
  }
  
  return res
};

// another

/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
  properties.sort((a, b) => a[0] - b[0] || b[1] - a[1])
  let stack = [], res = 0

  for(let i = 0, n = properties.length; i < n; i++) {
    while(stack.length && stack[stack.length - 1] < properties[i][1]) {
      stack.pop()
      res++
    }
    stack.push(properties[i][1])
  }
  
  return res
};

// another

/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
    if (properties == null || properties.length == 0) {
        return 0;
    }
    properties.sort((o1, o2) => {
        if (o1[0] == o2[0]) {
            return o1[1] - o2[1];
        }
        return o1[0] - o2[0];
    });
  const { max } = Math
    let mmax = Array(1e5 + 10).fill( 0);
    let ans = 0;
    let n = properties.length;
    for (let i = n - 1; i >= 0; i--) mmax[properties[i][0]] = max(properties[i][1], mmax[properties[i][0]]);
    for (let i = 1e5; i >= 1; i--) mmax[i] = max(mmax[i], mmax[i + 1]);
    for (let i = 0; i < n; i++) {
        if (mmax[properties[i][0] + 1] > properties[i][1]) ans++;
    }
    return ans;
};

// another

/**
 * @param {number[][]} properties
 * @return {number}
 */
const numberOfWeakCharacters = function(properties) {
  properties.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
  let max = -Infinity, res = 0
  for(let n = properties.length, i = n - 1; i >= 0; i--) {
    const [a, d] = properties[i]
    if(d < max) res++
    max = Math.max(max, d)
  }
  
  return res
};
