/**
 * @param {number[]} milestones
 * @return {number}
 */
const numberOfWeeks = function(milestones) {
  let max = -Infinity
  let res = 0, sum = 0
  for(const e of milestones) {
    max = Math.max(e, max)
    sum += e
  }
  
  return Math.min(sum, (sum - max) * 2 + 1)
};


// another

/**
 * @param {number[]} milestones
 * @return {number}
 */
const numberOfWeeks = function(milestones) {
    let sum = 0;
    for (let i = 0; i < milestones.length; i++) {
        sum += milestones[i];
    }

    let cantWork = 0;
    for (let i = 0; i < milestones.length; i++) {
        cantWork = Math.max(cantWork, milestones[i] - (sum - milestones[i]) - 1);
    }

    return sum - cantWork;
};

// another

/**
 * @param {number[]} milestones
 * @return {number}
 */
const numberOfWeeks = function(milestones) {
  const max = Math.max(...milestones)
  let sum = 0
  for(let i = 0; i < milestones.length; i++) {
    sum += milestones[i]
  }
  const res = sum - max
  
  return Math.min(sum, res * 2 + 1)
};
