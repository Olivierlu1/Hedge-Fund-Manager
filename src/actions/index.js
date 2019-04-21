export const subtractNetWorth = value => {
  return {
    type: "SUBTRACT_NETWORTH",
    payload: value
  };
};

export function hiredInformant() {
  return {
    type: "HIRED_INFORMANT"
  }
}

export const addNetWorth = value => {
  return {
    type: "ADD_NETWORTH",
    payload: value
  };
};

export function advanceDate() {
  return {
    type: 'ADVANCE_DATE'
  }
}

export const addEvent = value => {
  return {
    type: "ADD_EVENT",
    payload: value
  }
}

export function clearEvents() {
  return {
    type: "CLEAR_EVENTS"
  }
}

export function nextTurnTechEvent() {
  return {
    type: "NEXT_TURN_TECH"
  }
}

export function nextTurnClothingEvent() {
  return {
    type: "NEXT_TURN_CLOTHING"
  }
}

export function nextTurnFoodEvent() {
  return {
    type: "NEXT_TURN_FOOD"
  }
}

export function nextTurnPharmaEvent() {
  return {
    type: "NEXT_TURN_PHARMA"
  }
}

export function updateRandomTech() {
  return {
    type: "UPDATE_RANDOM_TECH"
  }
}

export function updateRandomFood() {
  return {
    type: "UPDATE_RANDOM_FOOD"
  }
}

export function updateRandomClothing() {
  return {
    type: "UPDATE_RANDOM_CLOTHING"
  }
}

export function updateRandomPharma() {
  return {
    type: "UPDATE_RANDOM_PHARMA"
  }
}

export function updateNetCash(value) {
  return {
    type: "UPDATE_NETCASH",
    payload: value
  }
}

export function updateLastNetCash(value) {
  return {
    type: "UPDATE_LAST_NETCASH",
    payload: value
  }
}

