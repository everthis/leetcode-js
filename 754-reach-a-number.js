/**
 * @param {number} target
 * @return {number}
 */
const reachNumber = function(target) {
    const tar = Math.abs(target);
    let step = 0;
    let sum = 0;
    while (sum < tar) {
        step++;
        sum += step;
    }
    while ((sum - tar) % 2 !== 0) {
        step++;
        sum += step;
    }
    return step;
};
