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
