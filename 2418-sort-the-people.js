/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const n = names.length
  const arr = []
  for(let i = 0; i <n; i++) {
    arr.push([names[i], heights[i]])
  }
  
  arr.sort((a, b) => a[1] - b[1])
  arr.reverse()
  return arr.map(e => e[0])
};
