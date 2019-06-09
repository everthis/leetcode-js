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
