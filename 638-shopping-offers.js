/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
const shoppingOffers = function (price, special, needs) {
  return helper(price, special, needs, 0)
}

function helper(price, special, needs, pos) {
  let local_min = directPurchase(price, needs)
  for (let i = pos; i < special.length; i++) {
    let offer = special[i]
    let temp = []
    for (let j = 0; j < needs.length; j++) {
      if (needs[j] < offer[j]) {
        // check if the current offer is valid
        temp = null
        break
      }
      temp.push(needs[j] - offer[j])
    }

    if (temp !== null) {
      // use the current offer and try next
      local_min = Math.min(
        local_min,
        offer[offer.length - 1] + helper(price, special, temp, i),
      )
    }
  }

  return local_min
}

function directPurchase(price, needs) {
  let total = 0
  for (let i = 0; i < needs.length; i++) {
    total += price[i] * needs[i]
  }

  return total
}


// another

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
const shoppingOffers = function (price, special, needs) {
  const directBuy = function (price, needs) {
    let res = 0
    for (let i = 0; i < price.length; i++) {
      res += price[i] * needs[i]
    }
    return res
  }
  const isValid = function (offer, needs) {
    for (let i = 0; i < offer.length; i++) {
      if (offer[i] > needs[i]) return false
    }
    return true
  }
  const help = (price, special, needs) => {
    let curMin = directBuy(price, needs)
    for (let i = 0; i < special.length; i++) {
      let curOf = special[i]
      if (isValid(curOf, needs)) {
        let tem = []
        for (let j = 0; j < needs.length; j++) {
          tem.push(needs[j] - curOf[j])
        }
        if (tem.length > 0) {
          curMin = Math.min(
            curMin,
            curOf[curOf.length - 1] + help(price, special, tem)
          )
        }
      }
    }
    return curMin
  }
  return help(price, special, needs)
}
