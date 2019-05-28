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
