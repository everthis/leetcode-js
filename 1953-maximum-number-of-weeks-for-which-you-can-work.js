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
