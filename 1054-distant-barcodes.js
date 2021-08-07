/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
const rearrangeBarcodes = function(barcodes) {
	const map = {};
	barcodes.forEach(b => map[b] = (map[b] || 0) + 1);
	const keys = Object.keys(map).sort((k1, k2) => map[k1] - map[k2]);

	let idx = 1;
	for (let k of keys) {
		let t = map[k];

		for (let i = 0; i < t; i++) {
			if (idx >= barcodes.length) idx = 0;
			barcodes[idx] = k;
			idx += 2;
		}
	}

	return barcodes;
};

// another

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
const rearrangeBarcodes = function(barcodes) {
  const hash = {}, n = barcodes.length
  for(let e of barcodes) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
  }
  const res = Array(n)
  let max = 0, idx = -1
  for(let k in hash) {
    if(hash[k] > max) {
      max = hash[k]
      idx = +k
    }
  }
  let i = 0
  // max freq first
  while(max > 0) {
    res[i] = idx
    max--
    i += 2
  }
  // the rest
  const keys = Object.keys(hash).map(e => +e)
  for(let j = 0, len = keys.length; j < len; j++) {
    if(keys[j] !== idx) {
      const k = keys[j]
      let freq = hash[k]
      while(freq > 0) {
        if(i >= n) i = 1
        res[i] = k
        freq--
        i += 2
      }
    }
  }
  
  return res
};
