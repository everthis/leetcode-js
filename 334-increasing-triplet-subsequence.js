/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
    // start with two largest values, as soon as we find a number bigger than both, while both have been updated, return true.
    let small = Number.MAX_VALUE, big = Number.MAX_VALUE;
    for (let n of nums) {
        if (n <= small) { small = n; } // update small if n is smaller than both
        else if (n <= big) { big = n; } // update big only if greater than small but smaller than big
        else return true; // return if you find a number bigger than both
    }
    return false;
};
