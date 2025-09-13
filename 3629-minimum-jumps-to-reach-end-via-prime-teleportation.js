const isPrime = new Array(1e6 + 1).fill(true);
/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {
    if (isPrime[0]) fill();
    const n = nums.length;
    const maxi = Math.max(...nums);
    const mp = new Map();

    for (let i = 0; i < n; i++) {
        if (!mp.has(nums[i])) {
            mp.set(nums[i], []);
        }
        mp.get(nums[i]).push(i);
    }

    const dist = new Array(n).fill(-1);
    const qu = [];
    qu.push(0);
    dist[0] = 0;
    const used = new Set();

    while (qu.length > 0) {
        const node = qu.shift();

        if (node - 1 >= 0 && dist[node - 1] === -1) {
            qu.push(node - 1);
            dist[node - 1] = dist[node] + 1;
        }
        if (node + 1 < n && dist[node + 1] === -1) {
            qu.push(node + 1);
            dist[node + 1] = dist[node] + 1;
        }

        if (!isPrime[nums[node]] || used.has(nums[node])) continue;

        for (let tar = nums[node]; tar <= maxi; tar += nums[node]) {
            if (!mp.has(tar)) continue;
            for (const it of mp.get(tar)) {
                if (dist[it] !== -1) continue;
                qu.push(it);
                if (it === n - 1) return dist[node] + 1;
                dist[it] = dist[node] + 1;
            }
        }

        used.add(nums[node]);
    }

    return dist[dist.length - 1]; 
};


function fill() {
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= 1e6; ++i) {
        if (isPrime[i]) {
            for (let j = i * i; j <= 1e6; j += i)
                isPrime[j] = false;
        }
    }
}
