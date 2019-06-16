/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
const largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
  return Object.entries(
    labels.reduce((ret, l, i) => {
      ret[l] = (ret[l] || []).concat(values[i])
      return ret
    }, {})
  )
    .reduce(
      (candi, [k, vals]) =>
        candi.concat(vals.sort((a, b) => b - a).slice(0, use_limit)),
      []
    )
    .sort((a, b) => b - a)
    .slice(0, num_wanted)
    .reduce((ret, n) => ret + n, 0)
};
