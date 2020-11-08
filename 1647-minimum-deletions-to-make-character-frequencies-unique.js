/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = function(s) {
      if (s == null || s.length <= 1) {
         return 0;
      }

      const map = new Map();
      for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
      }


      const frequencies = new Set();
      let minDeletions = 0;
      
      const vals = map.values()
      for (let frequency of vals) {
         if (!frequencies.has(frequency)) {
            frequencies.add(frequency);
            continue;
         }

         let curr = frequency;
         while (curr > 0 && frequencies.has(curr)) {
            curr--;
            minDeletions++;
         }

         if (curr > 0) {
            frequencies.add(curr);
         }
      }

      return minDeletions;
};
