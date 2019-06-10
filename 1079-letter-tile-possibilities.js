/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = function(tiles) {
  const obj = { count: 0 };
  dfs(tiles, new Array(tiles.length).fill(false), new Set(), "", obj);
  return obj.count;
};

function dfs(tiles, used, visited, path, obj) {
  if (path !== "" && !visited.has(path)) obj.count++;
  visited.add(path)

  for (let i = 0; i < tiles.length; i++) {
    if (used[i]) continue;
    used[i] = true;
    dfs(tiles, used, visited, path + tiles.charAt(i), obj);
    used[i] = false;
  }
}

// another

/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = function(tiles) {
  let used = new Array(tiles.length).fill(false);
  let visited = new Set();
  let cnt = 0;
  const dfs = (path) => {
    if (path.length && !visited.has(path)) {
      visited.add(path);
      cnt++;
    }
    for (let i = 0; i < tiles.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      dfs(path + tiles[i]);
      used[i] = false;
    }
  }
  dfs('');
  return cnt;
};

// another

/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = function(tiles) {
  const count = new Array(26).fill(0)
  const ACode = 'A'.charCodeAt(0)
  for (let i = 0, len = tiles.length; i < len; i++) {
    count[tiles.charCodeAt(i) - ACode]++
  }
  return dfs(count)
}

function dfs(arr) {
  let sum = 0
  for (let i = 0; i < 26; i++) {
    if (arr[i] === 0) continue
    sum++
    arr[i]--
    sum += dfs(arr)
    arr[i]++
  }
  return sum
}
