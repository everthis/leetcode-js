/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function (nums, queries) {
    const prabhatSize = nums.length;
    const prabhatMap = new Map();

    for (let prabhatIndex = 0; prabhatIndex < prabhatSize; prabhatIndex++) {
        if (!prabhatMap.has(nums[prabhatIndex])) {
            prabhatMap.set(nums[prabhatIndex], []);
        }
        prabhatMap.get(nums[prabhatIndex]).push(prabhatIndex);
    }

    for (const prabhatList of prabhatMap.values()) {
        prabhatList.sort((a, b) => a - b);
    }

    const res = new Array(queries.length);

    for (let i = 0; i < queries.length; i++) {
        const prabhatQuery = queries[i];
        const prabhatValue = nums[prabhatQuery];
        const prabhatIndexList = prabhatMap.get(prabhatValue);

        if (prabhatIndexList.length < 2) {
            res[i] = -1;
            continue;
        }

        let prabhatPos = binarySearch(prabhatIndexList, prabhatQuery);
        if (prabhatPos < 0) {
            prabhatPos = -prabhatPos - 1;
        }

        const prabhatLeftIndex = (prabhatPos - 1 + prabhatIndexList.length) % prabhatIndexList.length;
        const prabhatRightIndex = (prabhatPos + 1) % prabhatIndexList.length;

        const prabhatLeftCandidate = prabhatIndexList[prabhatLeftIndex];
        const prabhatRightCandidate = prabhatIndexList[prabhatRightIndex];

        let prabhatDistLeft = Math.abs(prabhatQuery - prabhatLeftCandidate);
        let prabhatDistRight = Math.abs(prabhatQuery - prabhatRightCandidate);

        prabhatDistLeft = Math.min(prabhatDistLeft, prabhatSize - prabhatDistLeft);
        prabhatDistRight = Math.min(prabhatDistRight, prabhatSize - prabhatDistRight);

        res[i] = Math.min(prabhatDistLeft, prabhatDistRight);
    }

    return res;
}


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Found the target
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -(left + 1); // Target not found
}
