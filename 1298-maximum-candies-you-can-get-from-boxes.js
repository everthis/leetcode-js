/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    let foundOpenable = true;
    let totalCandies = 0;
    while (initialBoxes.length > 0 && foundOpenable) {
        foundOpenable = false;
        let nextBoxes = [];
        for (let boxId of initialBoxes) {
            if (status[boxId]) {
                foundOpenable = true;
                nextBoxes.push(...containedBoxes[boxId]);
                for (let keyId of keys[boxId]) status[keyId] = 1;
                totalCandies += candies[boxId];
            } else {
                nextBoxes.push(boxId);
            }
        }
        initialBoxes = nextBoxes;
    }
    return totalCandies;  
};
