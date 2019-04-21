export function addPharmaStockPrice(value) {
  return {
    type: "ADD_PHARMA_STOCK_PRICE",
    payload: {
      merck: value.merck,
      johnson: value.johnson,
      hoffmann: value.hoffmann,
      novartis: value.novartis,
      pfizer: value.pfizer
    }
  }
}

export function hirePharmaOne() {
  return {
    type: "HIRE_PHARMA_ONE"
  }
}

export function hirePharmaOneForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_PHARMA_ONE"
  }
}

export function firePharmaOne() {
  return {
    type: "FIRE_PHARMA_ONE"
  }
}

export function hirePharmaTwo() {
  return {
    type: "HIRE_PHARMA_TWO"
  }
}

export function hirePharmaTwoForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_PHARMA_TWO"
  }
}

export function firePharmaTwo() {
  return {
    type: "FIRE_PHARMA_TWO"
  }
}

export function hirePharmaThree() {
  return {
    type: "HIRE_PHARMA_THREE"
  }
}

export function hirePharmaThreeForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_PHARMA_THREE"
  }
}

export function firePharmaThree() {
  return {
    type: "FIRE_PHARMA_THREE"
  }
}

export function hirePharmaFour() {
  return {
    type: "HIRE_PHARMA_FOUR"
  }
}

export function hirePharmaFourForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_PHARMA_FOUR"
  }
}

export function firePharmaFour() {
  return {
    type: "FIRE_PHARMA_FOUR"
  }
}

export function hirePharmaFive() {
  return {
    type: "HIRE_PHARMA_FIVE"
  }
}

export function hirePharmaFiveForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_PHARMA_FIVE"
  }
}

export function firePharmaFive() {
  return {
    type: "FIRE_PHARMA_FIVE"
  }
}
