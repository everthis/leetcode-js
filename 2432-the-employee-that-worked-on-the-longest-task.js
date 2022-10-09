/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
  const arr = Array(n).fill(0)
  const m = logs.length
  let pre = 0
  for(let i = 0; i < m; i++) {
     const [id, leave] = logs[i]
     arr[id] = Math.max(arr[id], leave - pre)
     pre = leave
  }
  // console.log(arr)
  const max = Math.max(...arr)
  
  return arr.indexOf(max)
};
