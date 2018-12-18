/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function(people, limit) {
    if(people.length === 0) return 0
    const arr = people.sort((a, b) => a - b)
    let count = 0
    let i = 0
    let j = arr.length - 1
    while(i <= j) {
        count++
        if(arr[i] + arr[j] <= limit) {
            i++
        }
        j--
    }

    return count
};
