/**
 * @param {number[]} arr
 * @return {number}
 */
const maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= arr[i - 1] + 1) continue;
        arr[i] = arr[i - 1] + 1;
    }
    return arr[arr.length - 1];
};
