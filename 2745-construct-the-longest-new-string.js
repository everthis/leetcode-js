/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    if (x === y)
        return (4 * x + 2 * z);
    var mini = Math.min(x, y);
    return (2 * mini + 2 * (mini + 1) + 2 * z); 
};
