/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
const rearrangeBarcodes = function(barcodes) {
  const hash = {}
  let maxFreq = 0, max = 0
  for(const e of barcodes) {
    if(hash[e] == null) hash[e] = 0
    hash[e]++
    if(hash[e] > maxFreq) {
        maxFreq = hash[e]
        max = e
    }
  }
  const n = barcodes.length
  const entries = Object.entries(hash)
  const res = Array(n)
  let idx = 0
  while(maxFreq) {
      res[idx] = max
      idx += 2
      maxFreq--
  }
  for(let [v, f] of entries) {
     if(+v === max) continue
     while(f) {
         if(idx >= n) idx = 1
         res[idx] = +v
         idx += 2
         f--
     }
  }
  
  return res
};

// another

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
