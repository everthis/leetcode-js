/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function(n, index, maxSum) {
		let ret=0;
		let i;
  const {max} = Math
		for(i=30;i>=0;i--) {
			let tmp=ret+(1<<i);
			let L=max(0,tmp-index);
			let sum=(L+tmp)*(tmp-L+1)/2;
			let R=max(0,tmp-(n-1-index));
			sum+=(R+tmp)*(tmp-R+1)/2-tmp;

			if(sum<=maxSum-n) ret+=1<<i;
		}
		return ret+1;
};
