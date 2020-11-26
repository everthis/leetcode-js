/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar = function(N, K) {
	if (N === 1) return 0;
	if (K % 2 === 0) return (kthGrammar(N - 1, K / 2) === 0) ? 1 : 0;
	else return (kthGrammar(N - 1, (K + 1) / 2) === 0) ? 0 : 1;
};

/**

// think of the problem like this
/*        0
      /       \
     0          1
   /   \      /    \
   0     1    1      0
 / \     / \   / \   / \
 0  1   1   0  1  0  0  1
*/

*/
