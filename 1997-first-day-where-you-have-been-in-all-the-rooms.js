/**
 * @param {number[]} nextVisit
 * @return {number}
 */
const firstDayBeenInAllRooms = function(nextVisit) {
        const P = 1e9+7;
        const n = nextVisit.length;
        const f = Array(n).fill(0) ;
        f[0] = 0;

        for (let i = 1; i < n; i++) {
            f[i] = ((
                    (2 * f[i - 1]) % P
                            + P - f[nextVisit[i - 1]]) % P + 2) % P;
        }

        return f[n - 1];
};
