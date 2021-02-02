/**
 * @param {string} s
 * @return {boolean}
 */
const checkPartitioning = function(s) {
  const map = manacher(s);
  return checkPartitioningDfs(map, s, 0);
};

function checkPartitioningDfs(map, word, i, path = []) {
  if (path.length > 3) return false;
  if (path.length == 3 && path.join('') == word) return true;
  let found = false;
  const length = map.get(i);
  path.push(word.substr(i, length));
  found = found || checkPartitioningDfs(map, word, i + length, path);
  path.pop();

  path.push(word.substr(i, 1));
  found = found || checkPartitioningDfs(map, word, i + 1, path);
  path.pop();
  
  return found;
}

function manacher(s) {
  const t = '^#' + s.split('').join('#') + '#$';
  let r = 0;
  let c = 0;
  let maxC = 0;
  const rad = new Array(t.length).fill(0);
  for (let i = 1; i < t.length - 1; ++i) {
    if (r > i) rad[i] = Math.min(rad[2 * c - i], r - i);
    while (t[i - rad[i] - 1] == t[i + rad[i] + 1]) rad[i]++;
    if (i + rad[i] > r) {
      c = i;
      r = i + rad[i];
    }
    if (rad[c] > rad[maxC]) maxC = c;
  }
  const ans = new Map();
  for (let i = 0; i < rad.length; ++i) {
    if (rad[i] > 0) {
      ans.set((i - rad[i] - 1) >>> 1, rad[i]);
    }
  }
  return ans;
}

// another

/**
 * @param {string} s
 * @return {boolean}
 */
const checkPartitioning = function (s) {
  const n = s.length
  const dp = Array.from({ length: n }, () => Array(n).fill(false))
  for(let i = n - 1; i >= 0; i--) {
    for(let j = i; j < n; j++) {
      if(s[i] === s[j]) {
        dp[i][j] = i + 1 <= j - 1 ? dp[i + 1][j - 1] : true
      } else dp[i][j] = false
    }
  }
  for(let i = 1; i < n - 1; i++) {
    for(let j = i; j < n - 1; j++) {
      if(dp[0][i - 1] && dp[i][j] && dp[j + 1][n - 1]) return true
    }
  }
  return false
}


// another

/**
 * @param {string} s
 * @return {boolean}
 */
const checkPartitioning = function(s) {
  for(let i = 1, len = s.length; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      const s1 = s.slice(0, i), s2 = s.slice(i, j), s3 = s.slice(j)
      if(chk(s1) && chk(s2) && chk(s3)) return true
    }
  }
  return false
};

function chk(s) {
  let l = 0, r = s.length - 1
  for(;l <= r;) {
    if(s[l] === s[r]) {
      l++
      r--
    } else return false
  }
  return true
}
