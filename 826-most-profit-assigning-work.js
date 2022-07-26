/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
const maxProfitAssignment = function(difficulty, profit, worker) {
  let res = 0
  const n = profit.length
  const jobs = []
  for(let i = 0; i < n; i++) {
      jobs.push([difficulty[i], profit[i]])
  }
  jobs.sort((a,b) => a[0] - b[0])
  worker.sort((a, b) => a - b)
  let i = 0, tmp = 0
  for(let w of worker) {
      while(i < n && w >= jobs[i][0]) {
          tmp = Math.max(tmp, jobs[i++][1])
      }
      res += tmp
  }
  
  return res
};
    
