export function addClothingStockPrice(value) {
  return {
    type: "ADD_CLOTHING_STOCK_PRICE",
    payload: {
      hermes: value.hermes,
      dior: value.dior,
      gucci: value.gucci,
      nike: value.nike,
      adidas: value.adidas
    }
  }
}

export function hireClothingOne() {
  return {
    type: "HIRE_CLOTHING_ONE"
  }
}

export function hireClothingOneForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_CLOTHING_ONE"
  }
}

export function fireClothingOne() {
  return {
    type: "FIRE_CLOTHING_ONE"
  }
}

export function hireClothingTwo() {
  return {
    type: "HIRE_CLOTHING_TWO"
  }
}

export function hireClothingTwoForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_CLOTHING_TWO"
  }
}

export function fireClothingTwo() {
  return {
    type: "FIRE_CLOTHING_TWO"
  }
}

export function hireClothingThree() {
  return {
    type: "HIRE_CLOTHING_THREE"
  }
}

export function hireClothingThreeForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_CLOTHING_THREE"
  }
}

export function fireClothingThree() {
  return {
    type: "FIRE_CLOTHING_THREE"
  }
}

export function hireClothingFour() {
  return {
    type: "HIRE_CLOTHING_FOUR"
  }
}

export function hireClothingFourForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_CLOTHING_FOUR"
  }
}

export function fireClothingFour() {
  return {
    type: "FIRE_CLOTHING_FOUR"
  }
}

export function hireClothingFive() {
  return {
    type: "HIRE_CLOTHING_FIVE"
  }
}

export function hireClothingFiveForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_CLOTHING_FIVE"
  }
}

export function fireClothingFive() {
  return {
    type: "FIRE_CLOTHING_FIVE"
  }
}
