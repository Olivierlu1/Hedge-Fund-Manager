export function insiderHired(value) {
  return {
    type: "UPDATE_CRIMINAL_RECORD",
    payload: {
      level: value
    }
  }
}

export function nextRoundCriminalLevel() {
  return {
    type: "ROUND_UPDATE_CRIMINAL_LEVEL"
  }
}

export function buyCharity(value) {
  return {
    type: "BOUGHT_CHARITY",
    payload: {
      charityLevel: value
    }
  }
}

export function buyCop(value) {
  return {
    type: "BOUGHT_COPS",
    payload: {
      copLevel: value
    }
  }
}