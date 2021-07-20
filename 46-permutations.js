/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const list = [];
  // Arrays.sort(nums); // not necessary
  backtrack(list, [], nums);
  return list;
}

function backtrack(list, tempList, nums) {
  if (tempList.length == nums.length) {
    list.push(tempList.slice(0));
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (tempList.includes(nums[i])) continue; // element already exists, skip
      tempList.push(nums[i]);
      backtrack(list, tempList, nums);
      tempList.pop();
    }
  }
}

// another

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const res = []
  bt(nums, 0, [], res)
  return res
};

function bt(nums, idx, cur, res) {
  if(idx === nums.length) {
    res.push(cur.slice())
    return
  }
  for(let i = 0; i < nums.length; i++) {
    if(cur.indexOf(nums[i]) !== -1) continue
    cur.push(nums[i])
    bt(nums, idx + 1, cur, res)
    cur.pop()
  }
}
