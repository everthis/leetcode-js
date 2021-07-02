/**
 * @param {string} s
 * @return {boolean}
 */
var isDecomposable = function(s) {
  let hasTwo = false
  let i = 0
  let j = 0
  
  while(j < s.length) {
    while(j + 1 < s.length && s[j + 1] === s[i]) {
      j += 1
    }
    
    if (((j - i + 1) % 3) === 2) {
      if (!hasTwo) {
        hasTwo = true
      } else {
        return false
      }
    } else if (((j - i + 1) % 3) === 1) {
      return false
    }
    j++
    i = j
  }
    
  return hasTwo
};


class Solution {
public:
    vector<int> longestCommomSubsequence(vector<vector<int>>& arrays) {
        int n = arrays.size();
        vector<int> nums = vector<int>(100); // 100 possible numbers as stated in the question
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < arrays[i].size(); j++) {
                nums[arrays[i][j] - 1]++; // count occurrences
            }
        }
        vector<int> ans;
        for (int i = 0; i < 100; i++) {
            if (nums[i] == n) ans.push_back(i + 1); // save it if it appears in every array
        }
        return ans;
    }
};

class Solution {
    public int[] findMaximums(int[] nums) {
        if(nums == null || nums.length == 0) return nums;
        // calc the [l, r] for each ele where in [l, r]: ele is the min value
        int len = nums.length;
        TreeSet<Integer> idx = new TreeSet<>();
        Integer[] indices = new Integer[len];
        for(int i = 0; i < len; i++) indices[i] = i;
        Arrays.sort(indices, (l, r) -> nums[l] - nums[r]);
        int prev = -1;
        int[] ranges = new int[len];
        Queue<Integer> sameLevel = new LinkedList<>();
        int[] ans = new int[len];
        for(int i = 0; i < len; i++) {
            if(nums[indices[i]] > prev) {
                while(!sameLevel.isEmpty()) {
                    idx.add(sameLevel.poll());
                }
            }
            Integer l = idx.lower(indices[i]);
            Integer r = idx.higher(indices[i]);
            ranges[indices[i]] = (r == null?len - 1:r - 1) - (l == null?0:l + 1) + 1;
            prev = nums[indices[i]];
            sameLevel.add(indices[i]);
        }
		// we iterate ranges from maximum to minimum to construct the ans array
        int j = len - 1;
        for(int i = len - 1; i >= 0; i--) {
            while(j >= 0 && ranges[indices[j]] < len - i) {
                j--;
            }
            ans[len - 1 - i] = nums[indices[j]];
        }
        return ans;
    }
}

class Solution:
    def minDayskVariants(self, points: List[List[int]], k: int) -> int:
        lo = 0
        hi = int(1e9)
        
		# binary search check helper function
        def check(day):
            lines = collections.defaultdict(collections.Counter)
            
            # 2d sweep line
            for x, y in points:
                lbx, lby = (x, y - day) # left point
                ubx, uby = (x - day, y) # bottom point
                
				# lbx + lby == ubx + uby == new x axis's open line
                lines[lbx+lby][lby-lbx] += 1
                lines[ubx+uby][uby-ubx+1] -= 1 # 
                
				# lbx + lby == ubx + uby == new x axis's close line
                lbx, lby = (x + day, y) # right point
                ubx, uby = (x, y + day) # upper point
                lines[lbx+lby+1][lby-lbx] -= 1 
                lines[ubx+uby+1][uby-ubx+1] += 1
            
            # hold a new ranges to sweep all lines from left to right on new x axis
            ranges = collections.Counter()
			
			# for every critical points on new x axis (it's a diag on the original axis),
			# add the sweep lines on new y axis
            for diag in sorted(lines):
                for num in sorted(lines[diag]):
                    cnt = lines[diag][num]
                    ranges[num] += cnt
                
				# for every critical points, check whether there is an area having 
				# overlapping points >= k
                cur = 0
                for num in sorted(ranges):
                    cnt = ranges[num] 
                    cur += cnt

                    if cur >= k:
                        return True
            
            return False
                
		# binary search
        while lo < hi:
            mid = (lo + hi) // 2
            if check(mid):
                hi = mid
            else:
                lo = mid + 1
        
        return lo
