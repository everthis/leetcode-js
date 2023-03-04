/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
const taskSchedulerII = function(tasks, space) {
  const last = new Map();;
  let res = 0;
  for (const a of tasks)
    if (last.has(a)) {
      res = Math.max(res, last.get(a) + space) + 1
      last.set(a, res);
    } else {
      res++
      last.set(a, res);
    }  
   return res;
};
