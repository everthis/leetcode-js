/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function(seats) {
    let left, right, res = 0, n = seats.length;
    for (left = right = 0; right < n; ++right)
        if (seats[right] === 1) {
            if (left === 0) res = Math.max(res, right - left);
            else res = Math.max(res, Math.floor((right - left + 1) / 2));
            left = right + 1;
        }
    res = Math.max(res, n - left);
    return res;
};
