export function addTechStockPrice(value) {
  return {
    type: "ADD_TECH_STOCK_PRICE",
    payload: {
      microsoft: value.microsoft,
      facebook: value.facebook,
      dropbox: value.dropbox,
      google: value.google,
      apple: value.apple
    }
  }
}

export function hireTechOne() {
  return {
    type: "HIRE_TECH_ONE"
  }
}

export function hireTechOneForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_TECH_ONE"
  }
}

export function fireTechOne() {
  return {
    type: "FIRE_TECH_ONE"
  }
}

export function hireTechTwo() {
  return {
    type: "HIRE_TECH_TWO"
  }
}

export function hireTechTwoForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_TECH_TWO"
  }
}

export function fireTechTwo() {
  return {
    type: "FIRE_TECH_TWO"
  }
}

export function hireTechThree() {
  return {
    type: "HIRE_TECH_THREE"
  }
}

export function hireTechThreeForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_TECH_THREE"
  }
}

export function fireTechThree() {
  return {
    type: "FIRE_TECH_THREE"
  }
}

export function hireTechFour() {
  return {
    type: "HIRE_TECH_FOUR"
  }
}

export function hireTechFourForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_TECH_FOUR"
  }
}

export function fireTechFour() {
  return {
    type: "FIRE_TECH_FOUR"
  }
}

export function hireTechFive() {
  return {
    type: "HIRE_TECH_FIVE"
  }
}

export function hireTechFiveForNextTurn() {
  return {
    type: "HIRE_NEXT_TURN_TECH_FIVE"
  }
}

export function fireTechFive() {
  return {
    type: "FIRE_TECH_FIVE"
  }
}
