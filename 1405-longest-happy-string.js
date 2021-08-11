/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  return generate(a, b, c, "a", "b", "c");
};

function generate(a, b, c, ac, bc, cc) {
  if (a < b) return generate(b, a, c, bc, ac, cc);
  if (b < c) return generate(a, c, b, ac, cc, bc);
  if (b === 0) return ac.repeat(Math.min(2, a));
  let use_a = Math.min(2, a),
    use_b = a - use_a >= b ? 1 : 0;
  return (
    ac.repeat(use_a) +
    bc.repeat(use_b) +
    generate(a - use_a, b - use_b, c, ac, bc, cc)
  );
}

