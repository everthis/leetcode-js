/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    const useBoth = costBoth < cost1 + cost2
    if(useBoth) {
        let res = Math.min(need1, need2) * costBoth
        const num = Math.min(need1, need2)
        if(need1 > need2) {
            res += Math.min(cost1, costBoth) * (need1 - num)
        } else if(need1 < need2) {
            res += Math.min(cost2, costBoth) * (need2 - num)
        }

        return res
    } else {
        return cost1 * need1 + cost2 * need2
    }
};
