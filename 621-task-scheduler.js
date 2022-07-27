/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const len = tasks.length
  const cnt = Array(26).fill(0)

  const A = 'A'.charCodeAt(0)
  let maxFreq = 0,
    maxFreqCnt = 0
  for (const ch of tasks) {
    const idx = ch.charCodeAt(0) - A
    cnt[idx]++
    if (maxFreq === cnt[idx]) {
      maxFreqCnt++
    } else if (maxFreq < cnt[idx]) {
      maxFreqCnt = 1
      maxFreq = cnt[idx]
    }
  }

  const slot = maxFreq - 1
  const numOfPerSlot = n - (maxFreqCnt - 1)
  const available = len - maxFreq * maxFreqCnt
  const idles = Math.max(0, slot * numOfPerSlot - available)
  return len + idles
}


// another

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  const map = Array(26).fill(0);
  const ca = "A".charCodeAt(0);
  for (let c of tasks) map[c.charCodeAt(0) - ca]++;
  map.sort((a, b) => a - b);
  let max_val = map[25] - 1,
    idle_slots = max_val * n;
  for (let i = 24; i >= 0 && map[i] > 0; i--) {
    idle_slots -= Math.min(map[i], max_val);
  }
  return idle_slots > 0 ? idle_slots + tasks.length : tasks.length;
};

// another

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  const hash = {};
  for(let task of tasks) {
    hash[task] = hash[task] + 1 || 1
  }
  let max = 0, count = 0;
  for(let el in hash) {
    if(hash[el] > max) {
      max = hash[el];
      count = 1
    } else if(hash[el] === max) {
      count++;
    }
  }
  return Math.max((max - 1) *  (n + 1)  +  count, tasks.length)
};

// another

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
  let max = 0, maxCnt = 0
  const len = tasks.length, cnt = Array(26).fill(0), A = 'A'.charCodeAt(0)
  
  for(let ch of tasks) {
    const idx = ch.charCodeAt(0) - A
    cnt[idx]++
    if(max === cnt[idx]) maxCnt++
    else if(max < cnt[idx]) {
      max = cnt[idx]
      maxCnt = 1
    }
  }
  
  const maxSlots = max * maxCnt
  const avaiSlots = (max - 1) * (n - (maxCnt - 1))
  const rem = len - maxSlots
  const emptySlots = Math.max(0, avaiSlots - rem)
  
  return len + emptySlots
};
