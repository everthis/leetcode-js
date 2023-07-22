/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    left.sort(function(a,b){return a-b});
    right.sort(function(a,b){return a-b});
    if(left.length == 0){
        return n-right[0];
    }
    if(right.length == 0){
        return left[left.length-1];
    }
    return Math.max(left[left.length-1], n-right[0])
};
