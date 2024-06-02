let MOD = 1000000007;

function createDpArray() {
  return Array.from({ length: 1001 }, () => new Uint32Array(1001));
}

let dp0 = createDpArray();
let dp1 = createDpArray();

/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function (zero, one, limit) {
  ++limit;

  for (let i = 0; i <= zero; ++i) {
    for (let j = 0; j <= one; ++j) {
      if (!i && !j) continue;
      if (!i) {
        dp1[i][j] = j < limit;
        dp0[i][j] = 0;
        continue;
      }
      if (!j) {
        dp0[i][j] = i < limit;
        dp1[i][j] = 0;
        continue;
      }

      dp1[i][j] = (dp0[i][j - 1] + dp1[i][j - 1]) % MOD;
      if (j >= limit) dp1[i][j] = (dp1[i][j] - dp0[i][j - limit] + MOD) % MOD;

      dp0[i][j] = (dp0[i - 1][j] + dp1[i - 1][j]) % MOD;
      if (i >= limit) dp0[i][j] = (dp0[i][j] - dp1[i - limit][j] + MOD) % MOD;
    }
  }

  return (dp0[zero][one] + dp1[zero][one]) % MOD;
};
