/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const findLexSmallestString = function(s, a, b) {
    let res = s;
    const n = s.length;

    let evenLimit = 10;
    if (b % 2 === 0) evenLimit = 1;

    for (let i = 0; i < evenLimit; i++) {
        for (let j = 0; j < 10; j++) {
            let t = s.split('');

            for (let k = 0; k < n; k += 2) {
                t[k] = (parseInt(t[k]) + a * i) % 10;
            }
            for (let k = 1; k < n; k += 2) {
                t[k] = (parseInt(t[k]) + a * j) % 10;
            }

            t = t.join('');
            let p = t;
            const gcdValue = gcd(n, b);
            for (let k = 0; k <= n / gcdValue; k++) {
                p = p.slice(n - b) + p.slice(0, n - b);
                res = res < p ? res : p;
            }
        }
    }

    return res;    
};


function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
// another

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */ 
const findLexSmallestString = function(s, a, b) {
  let res = s
  const visited = new Set()
  dfs(s)
  return res
  
  function dfs(str) {
    if(isVisited(str)) return
    visit(str)
    dfs(add(str))
    dfs(rotate(str))
  }
  
  function isVisited(str) {
    return visited.has(str)
  }
  
  function visit(str) {
    if(str < res) res = str
    visited.add(str)
  }
  
  function add(str) {
    const arr = str.split('').map(e => +e)
    for(let i = 1; i < str.length; i += 2) {
      arr[i] = (arr[i] + a) % 10
    }
    return arr.join('')
  }
  
  function rotate(str) {
    const n = str.length
    const len = b % str.length
    const pre = str.slice(0,n - len), suf = str.slice(n - len)
    return `${suf}${pre}`
  }
};

// another

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */ 
const findLexSmallestString = function(s, a, b) {
  let res = s
  const visited = new Set()
  dfs(s)
  return res
  
  function dfs(str) {
    if(isVisited(str)) return
    visit(str)
    dfs(add(str))
    dfs(rotate(str))
  }
  
  function isVisited(str) {
    return visited.has(str)
  }
  
  function visit(str) {
    if(str < res) res = str
    visited.add(str)
  }
  
  function add(str) {
    const arr = str.split('').map(e => +e)
    for(let i = 1; i < str.length; i += 2) {
      arr[i] = (arr[i] + a) % 10
    }
    return arr.join('')
  }
  
  function rotate(str) {
    const arr = str.split('')
    arr.reverse()
    let l = 0, r = b - 1
    while(l < r) {
      swap(arr, l++, r--)
    }
    l = b
    r = s.length - 1
    while(l < r) {
      swap(arr, l++, r--)
    }
    return arr.join('')
  }
  
  function swap(arr, i, j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
};

// another


/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const findLexSmallestString = function(s, a, b) {
  let res = s
  const set = new Set()
  const q = [s]
  set.add(res)
  while(q.length) {
    const len = q.length
    for(let i = 0; i < len; i++) {
      const tmp = q.shift()
      const t1 = podd(tmp, a)
      const t2 = rotate(tmp, b)
      if(!set.has(t1)) {
        set.add(t1)
        q.push(t1)
      }
      if(!set.has(t2)) {
        set.add(t2)
        q.push(t2)
      }
      if(t1 < res) res = t1
      if(t2 < res) res = t2
    }
  }
  return res
};

function podd(s, num) {
  const arr = s.split('')
  for(let i = 1, len = s.length; i < len; i += 2) {
    const tmp = (+s[i] + num) % 10
    arr[i] = tmp
  }
  return arr.join('')
}

function rotate(s, num) {
  const len = s.length
  num = num % len
  const idx = len - num
  return s.slice(idx) + s.slice(0, idx)
}
