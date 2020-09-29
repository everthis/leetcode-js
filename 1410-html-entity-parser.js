/**
 * @param {string} text
 * @return {string}
 */
const entityParser = function(text) {
  const q = /&quot;/g
  const s = /&apos;/g
  const a = /&amp;/g
  const g = /&gt;/g
  const l = /&lt;/g
  const sl = /&frasl;/g
  let t = text.replace(q, '"')
  t = t.replace(q, '"')
  t = t.replace(s, "'")
  t = t.replace(g, '>')
  t = t.replace(l, '<')
  t = t.replace(sl, '/')
  t = t.replace(a, '&')
  return t
};
