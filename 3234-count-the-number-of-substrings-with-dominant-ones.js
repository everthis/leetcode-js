/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const n = s.length;
    let result = 0;

    // Iterate through possible zero counts (1 to sqrt(n))
    for (let k = 1; k <= Math.floor(Math.sqrt(n)); k++) {
        const zeros = [];  // Array to store positions of zeros
        let lastzero = -1; // Position of the zero before the first zero in our window
        let ones = 0;      // Count of ones in our current window

        // Scan through the string
        for (let right = 0; right < n; right++) {
            if (s[right] === '0') {
                zeros.push(right);
                // If we have more than k zeros, remove the leftmost one
                while (zeros.length > k) {
                    ones -= (zeros[0] - lastzero - 1);  // Subtract ones between lastzero and the removed zero
                    lastzero = zeros.shift();
                }
            } else {
                ones++;
            }

            // If we have exactly k zeros and at least k^2 ones
            if (zeros.length === k && ones >= k ** 2) {
                // Add the minimum of:
                // 1. Number of ways to extend to the left (zeros[0] - lastzero)
                // 2. Number of ways to extend to the right (ones - k^2 + 1)
                result += Math.min(zeros[0] - lastzero, ones - k ** 2 + 1);
            }
        }
    }

    // Handle all-ones substrings
    let i = 0;
    while (i < n) {
        if (s[i] === '0') {
            i++;
            continue;
        }
        let sz = 0;
        while (i < n && s[i] === '1') {
            sz++;
            i++;
        }
        // Add number of all-ones substrings
        result += (sz * (sz + 1)) / 2;
    }

    return result;
};
