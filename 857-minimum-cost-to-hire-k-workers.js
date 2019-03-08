/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */
const mincostToHireWorkers = function(quality, wage, K) {
  const workers = Array.from({length: quality.length}, () => new Array(2));
  for (let i = 0; i < quality.length; ++i) workers[i] = [wage[i] / quality[i], quality[i]];
  workers.sort((a, b) => a[0] - b[0])
  let res = Number.MAX_VALUE, qsum = 0;
  const queue = []
  for (let worker of workers) {
    qsum += worker[1];
    insert(queue, -worker[1])
    if (queue.length > K) qsum += queue.shift();
    if (queue.length === K) res = Math.min(res, qsum * worker[0]);
  }
  return res;
};

function insert(arr, el) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > el) {
      arr.splice(i, 0, el)
      return
    }
  }
  arr.push(el)
}
