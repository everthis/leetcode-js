/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function(dungeon) {
  if(dungeon.length === 0) return 1 
  const rows = dungeon.length
  const cols = dungeon[0].length

  for(let i = rows - 1 ; i >= 0; i--) {
    for(let j = cols - 1; j >= 0; j--) {
      if(i==rows-1 && j==cols-1) dungeon[i][j]=Math.max(1, 1-dungeon[i][j]);
      else if(i==rows-1) dungeon[i][j]=Math.max(1, dungeon[i][j+1]-dungeon[i][j]);
      else if(j==cols-1) dungeon[i][j]=Math.max(1, dungeon[i+1][j]-dungeon[i][j]);
      else dungeon[i][j]=Math.max(1, Math.min(dungeon[i+1][j], dungeon[i][j+1])-dungeon[i][j]);
    }
  }
  return dungeon[0][0]
};

// another

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function (dungeon) {
  const n = dungeon.length,
    m = dungeon[0].length
  const dp = Array(n + 1).fill(Number.MAX_VALUE)
  dp[n - 1] = 1
  for (let j = m - 1; j >= 0; j--) {
    for (let i = n - 1; i >= 0; i--) {
      dp[i] = Math.min(dp[i], dp[i + 1]) - dungeon[i][j]
      dp[i] = Math.max(1, dp[i])
    }
  }
  return dp[0]
}

