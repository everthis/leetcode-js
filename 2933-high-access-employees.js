/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
    const map = new Map();
    access_times.sort((a, b) => a[1] - b[1]).forEach((item) => {
      const key = item[0];
      const value = parseInt(item[1]);
      map.set(key, map.get(key) || []);
      map.get(key).push(value);
    });
    const ans = [];
    map.forEach((value, key) => {
      for (let i = 2; i < value.length; i++) {
        if (value[i] - value[i - 2] < 100) {
          ans.push(key);
          break;
        }
      }
    });
    return ans;
};
