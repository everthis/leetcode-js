/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
  const hash = {};
  for (let i = 0; i < list1.length; i++) {
    if (!hash.hasOwnProperty(list1[i])) {
      hash[list1[i]] = i;
    }
  }
  const resArr = [];
  for (let j = 0; j < list2.length; j++) {
    if (hash.hasOwnProperty(list2[j])) {
      resArr.push([list2[j], hash[list2[j]] + j]);
    }
  }
  const resHash = {};
  resArr.forEach(el => {
    if (resHash.hasOwnProperty(el[1])) {
      resHash[el[1]].push(el[0]);
    } else {
      resHash[el[1]] = [el[0]];
    }
  });
  resArr.sort((a, b) => a[1] - b[1]);
  return resHash[resArr[0][1]];
};

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Burger King", "Tapioca Express", "Shogun"]
  )
);
