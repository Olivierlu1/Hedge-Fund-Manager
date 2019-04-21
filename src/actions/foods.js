export function addFoodStockPrice(value) {
  return {
    type: "ADD_FOOD_STOCK_PRICE",
    payload: {
      cargill: value.cargill,
      pepsi: value.pepsi,
      nestle: value.nestle,
      archer: value.archer,
      sysco: value.sysco
    }
  }
}

export function hireFoodOne() {
  return {
    type: "HIRE_FOOD_ONE"
  }
}

export function hireFoodOneForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_FOOD_ONE"
  }
}

export function fireFoodOne() {
  return {
    type: "FIRE_FOOD_ONE"
  }
}

export function hireFoodTwo() {
  return {
    type: "HIRE_FOOD_TWO"
  }
}

export function hireFoodTwoForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_FOOD_TWO"
  }
}

export function fireFoodTwo() {
  return {
    type: "FIRE_FOOD_TWO"
  }
}

export function hireFoodThree() {
  return {
    type: "HIRE_FOOD_THREE"
  }
}

export function hireFoodThreeForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_FOOD_THREE"
  }
}

export function fireFoodThree() {
  return {
    type: "FIRE_FOOD_THREE"
  }
}

export function hireFoodFour() {
  return {
    type: "HIRE_FOOD_FOUR"
  }
}

export function hireFoodFourForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_FOOD_FOUR"
  }
}

export function fireFoodFour() {
  return {
    type: "FIRE_FOOD_FOUR"
  }
}

export function hireFoodFive() {
  return {
    type: "HIRE_FOOD_FIVE"
  }
}

export function hireFoodFiveForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_FOOD_FIVE"
  }
}

export function fireFoodFive() {
  return {
    type: "FIRE_FOOD_FIVE"
  }
}
