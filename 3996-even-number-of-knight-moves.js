/**
 * @param {number[]} start
 * @param {number[]} target
 * @return {boolean}
 */
var canReach = function(start, target) {
    return (start[0] + start[1]) % 2 === (target[0] + target[1]) % 2
};
