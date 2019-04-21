import { notHiredMessage } from '../functions';

export const insiderTechReducer = (state = { one: { isHired: false, willHire: false}, two: { isHired: false, willHire: false}, three: { isHired: false, willHire: false}, four: { isHired: false, willHire: false}, five: { isHired: false, willHire: false}}, action) => {
  switch (action.type) {
    case 'HIRE_TECH_ONE': // called when hired is press
      return {...state,
                    one: {
                      ...state.one,
                      willHire: true
                    }
      }
    case 'HIRE_NEXT_TURN_TECH_ONE': // called when next turn is pressed
      return {...state,
                    one: {
                      ...state.one,
                      isHired: true,
                    }
      }
    case 'FIRE_TECH_ONE': // called when next turn is pressed
      if (state.one.willHire === false) {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false
                    }
        }
      }
    case 'HIRE_TECH_TWO': // called when hired is press
      return {...state,
                    two: {
                      ...state.two,
                      willHire: true
                    }
      }
    case 'HIRE_NEXT_TURN_TECH_TWO': // called when next turn is pressed
      return {...state,
                    two: {
                      ...state.two,
                      isHired: true,
                    }
      }
    case 'FIRE_TECH_TWO': // called when next turn is pressed
      if (state.two.willHire === false) {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false
                    }
        }
      }
    case 'HIRE_TECH_THREE': // called when hired is press
      return {...state,
                    three: {
                      ...state.three,
                      willHire: true
                    }
      }
    case 'HIRE_NEXT_TURN_TECH_THREE': // called when next turn is pressed
      return {...state,
                    three: {
                      ...state.three,
                      isHired: true,
                    }
      }
    case 'FIRE_TECH_THREE': // called when next turn is pressed
      if (state.three.willHire === false) {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false
                    }
        }
      }
    case 'HIRE_TECH_FOUR': // called when hired is press
      const object7 = {...state,
                    four: {
                      ...state.four,
                      willHire: true
                    }
      }
      return object7;
    case 'HIRE_NEXT_TURN_TECH_FOUR': // called when next turn is pressed
      const object8 = {...state,
                    four: {
                      ...state.four,
                      isHired: true,
                    }
      }
      return object8;
    case 'FIRE_TECH_FOUR': // called when next turn is pressed
      if (state.four.willHire === false) {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false
                    }
        }
      }
    case 'HIRE_TECH_FIVE': // called when hired is press
      const object9 = {...state,
                    five: {
                      ...state.five,
                      willHire: true
                    }
      }
      return object9;
    case 'HIRE_NEXT_TURN_TECH_FIVE': // called when next turn is pressed
      const object10 = {...state,
                    five: {
                      ...state.five,
                      isHired: true,
                    }
      }
      return object10;
    case 'FIRE_TECH_FIVE': // called when next turn is pressed
      if (state.five.willHire === false) {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false
                    }
        }
      }
    default:
      return state;
  }
}

export const insiderPharmaReducer = (state = { one: { isHired: false, willHire: false}, two: { isHired: false, willHire: false}, three: { isHired: false, willHire: false}, four: { isHired: false, willHire: false}, five: { isHired: false, willHire: false}}, action) => {
  switch(action.type) {
    case 'HIRE_PHARMA_ONE': // called when hired is press
      const object = {...state,
                    one: {
                      ...state.one,
                      willHire: true
                    }
      }
      return object;
    case 'HIRE_NEXT_TURN_PHARMA_ONE': // called when next turn is pressed
      return {...state,
                    one: {
                      ...state.one,
                      isHired: true
                    }
      }
    case 'FIRE_PHARMA_ONE': // called when next turn is pressed
      if (state.one.willHire === false) {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false
                    }
        }
      }
    case 'HIRE_PHARMA_TWO': // called when hired is press
      const object3 = {...state,
                    two: {
                      ...state.two,
                      willHire: true
                    }
      }
      return object3;
    case 'HIRE_NEXT_TURN_PHARMA_TWO': // called when next turn is pressed
      const object4 = {...state,
                    two: {
                      ...state.two,
                      isHired: true
                    }
      }
      return object4;
    case 'FIRE_PHARMA_TWO': // called when next turn is pressed
      if (state.two.willHire === false) {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false
                    }
        }
      }
    case 'HIRE_PHARMA_THREE': // called when hired is press
      const object5 = {...state,
                    three: {
                      ...state.three,
                      willHire: true
                    }
      }
      return object5;
    case 'HIRE_NEXT_TURN_PHARMA_THREE': // called when next turn is pressed
      const object6 = {...state,
                    three: {
                      ...state.three,
                      isHired: true
                    }
      }
      return object6;
    case 'FIRE_PHARMA_THREE': // called when next turn is pressed
      if (state.three.willHire === false) {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false
                    }
        }
      }
    case 'HIRE_PHARMA_FOUR': // called when hired is press
      const object7 = {...state,
                    four: {
                      ...state.four,
                      willHire: true
                    }
      }
      return object7;
    case 'HIRE_NEXT_TURN_PHARMA_FOUR': // called when next turn is pressed
      const object8 = {...state,
                    four: {
                      ...state.four,
                      isHired: true
                    }
      }
      return object8;
    case 'FIRE_PHARMA_FOUR': // called when next turn is pressed
      if (state.four.willHire === false) {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false
                    }
        }
      }
    case 'HIRE_PHARMA_FIVE': // called when hired is press
      const object9 = {...state,
                    five: {
                      ...state.five,
                      willHire: true
                    }
      }
      return object9;
    case 'HIRE_NEXT_TURN_PHARMA_FIVE': // called when next turn is pressed
      const object10 = {...state,
                    five: {
                      ...state.five,
                      isHired: true
                    }
      }
      return object10;
    case 'FIRE_PHARMA_FIVE': // called when next turn is pressed
      if (state.five.willHire === false) {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false
                    }
        }
      }
    default:
      return state;
  }
}

export const insiderFoodReducer = (state = { one: { isHired: false, willHire: false}, two: { isHired: false, willHire: false}, three: { isHired: false, willHire: false}, four: { isHired: false, willHire: false}, five: { isHired: false, willHire: false}}, action) => {
  switch(action.type) {
    case 'HIRE_FOOD_ONE': // called when hired is press
      const object = {...state,
                    one: {
                      ...state.one,
                      willHire: true
                    }
      }
      return object;
    case 'HIRE_NEXT_TURN_FOOD_ONE': // called when next turn is pressed
      return {...state,
                    one: {
                      ...state.one,
                      isHired: true
                    }
      }
    case 'FIRE_FOOD_ONE': // called when next turn is pressed
      if (state.one.willHire === false) {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false
                    }
        }
      }
    case 'HIRE_FOOD_TWO': // called when hired is press
      const object3 = {...state,
                    two: {
                      ...state.two,
                      willHire: true
                    }
      }
      return object3;
    case 'HIRE_NEXT_TURN_FOOD_TWO': // called when next turn is pressed
      const object4 = {...state,
                    two: {
                      ...state.two,
                      isHired: true
                    }
      }
      return object4;
    case 'FIRE_FOOD_TWO': // called when next turn is pressed
      if (state.two.willHire === false) {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false
                    }
        }
      }
    case 'HIRE_FOOD_THREE': // called when hired is press
      const object5 = {...state,
                    three: {
                      ...state.three,
                      willHire: true
                    }
      }
      return object5;
    case 'HIRE_NEXT_TURN_FOOD_THREE': // called when next turn is pressed
      const object6 = {...state,
                    three: {
                      ...state.three,
                      isHired: true
                    }
      }
      return object6;
    case 'FIRE_FOOD_THREE': // called when next turn is pressed
      if (state.three.willHire === false) {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false
                    }
        }
      }
    case 'HIRE_FOOD_FOUR': // called when hired is press
      const object7 = {...state,
                    four: {
                      ...state.four,
                      willHire: true
                    }
      }
      return object7;
    case 'HIRE_NEXT_TURN_FOOD_FOUR': // called when next turn is pressed
      const object8 = {...state,
                    four: {
                      ...state.four,
                      isHired: true
                    }
      }
      return object8;
    case 'FIRE_FOOD_FOUR': // called when next turn is pressed
      if (state.four.willHire === false) {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false
                    }
        }
      }
    case 'HIRE_FOOD_FIVE': // called when hired is press
      const object9 = {...state,
                    five: {
                      ...state.five,
                      willHire: true
                    }
      }
      return object9;
    case 'HIRE_NEXT_TURN_FOOD_FIVE': // called when next turn is pressed
      const object10 = {...state,
                    five: {
                      ...state.five,
                      isHired: true
                    }
      }
      return object10;
    case 'FIRE_FOOD_FIVE': // called when next turn is pressed
      if (state.five.willHire === false) {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false
                    }
        }
      }
    default:
      return state;
  }
}

export const insiderClothingReducer = (state = { one: { isHired: false, willHire: false}, two: { isHired: false, willHire: false}, three: { isHired: false, willHire: false}, four: { isHired: false, willHire: false}, five: { isHired: false, willHire: false}}, action) => {
  switch(action.type) {
    case 'HIRE_CLOTHING_ONE': // called when hired is press
      const object = {...state,
                    one: {
                      ...state.one,
                      willHire: true
                    }
      }
      return object;
    case 'HIRE_NEXT_TURN_CLOTHING_ONE': // called when next turn is pressed
      return {...state,
                    one: {
                      ...state.one,
                      isHired: true
                    }
      }
    case 'FIRE_CLOTHING_ONE': // called when next turn is pressed
      if (state.one.willHire === false) {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    one: {
                      ...state.one,
                      willHire: false
                    }
        }
      }
    case 'HIRE_CLOTHING_TWO': // called when hired is press
      const object3 = {...state,
                    two: {
                      ...state.two,
                      willHire: true
                    }
      }
      return object3;
    case 'HIRE_NEXT_TURN_CLOTHING_TWO': // called when next turn is pressed
      const object4 = {...state,
                    two: {
                      ...state.two,
                      isHired: true
                    }
      }
      return object4;
    case 'FIRE_CLOTHING_TWO': // called when next turn is pressed
      if (state.two.willHire === false) {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    two: {
                      ...state.two,
                      willHire: false
                    }
        }
      }
    case 'HIRE_CLOTHING_THREE': // called when hired is press
      const object5 = {...state,
                    three: {
                      ...state.three,
                      willHire: true
                    }
      }
      return object5;
    case 'HIRE_NEXT_TURN_CLOTHING_THREE': // called when next turn is pressed
      const object6 = {...state,
                    three: {
                      ...state.three,
                      isHired: true
                    }
      }
      return object6;
    case 'FIRE_CLOTHING_THREE': // called when next turn is pressed
      if (state.three.willHire === false) {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    three: {
                      ...state.three,
                      willHire: false
                    }
        }
      }
    case 'HIRE_CLOTHING_FOUR': // called when hired is press
      const object7 = {...state,
                    four: {
                      ...state.four,
                      willHire: true
                    }
      }
      return object7;
    case 'HIRE_NEXT_TURN_CLOTHING_FOUR': // called when next turn is pressed
      const object8 = {...state,
                    four: {
                      ...state.four,
                      isHired: true
                    }
      }
      return object8;
    case 'FIRE_CLOTHING_FOUR': // called when next turn is pressed
      if (state.four.willHire === false) {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    four: {
                      ...state.four,
                      willHire: false
                    }
        }
      }
    case 'HIRE_CLOTHING_FIVE': // called when hired is press
      const object9 = {...state,
                    five: {
                      ...state.five,
                      willHire: true
                    }
      }
      return object9;
    case 'HIRE_NEXT_TURN_CLOTHING_FIVE': // called when next turn is pressed
      const object10 = {...state,
                    five: {
                      ...state.five,
                      isHired: true
                    }
      }
      return object10;
    case 'FIRE_CLOTHING_FIVE': // called when next turn is pressed
      if (state.five.willHire === false) {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false,
                      isHired: false
                    }
      }
      } else {
        return {...state,
                    five: {
                      ...state.five,
                      willHire: false
                    }
        }
      }
    default:
      return state;
  }
}

export const insiderTechMessage = (state = {one: notHiredMessage, two: notHiredMessage, three: notHiredMessage, four: notHiredMessage, five: notHiredMessage}, action) => {
  switch (action.type) {
    case 'UPDATE_TECH_ONE_MESSAGE':
      return Object.assign({}, state, { one: action.payload });
    case 'CLEAR_TECH_ONE_MESSAGE':
      return Object.assign({}, state, { one: "" });
    case 'UPDATE_TECH_TWO_MESSAGE':
      return Object.assign({}, state, { two: action.payload });
    case 'CLEAR_TECH_TWO_MESSAGE':
      return Object.assign({}, state, { two: "" });
    case 'UPDATE_TECH_THREE_MESSAGE':
      return Object.assign({}, state, { three: action.payload });
    case 'CLEAR_TECH_THREE_MESSAGE':
      return Object.assign({}, state, { three: "" });
    case 'UPDATE_TECH_FOUR_MESSAGE':
      return Object.assign({}, state, { four: action.payload });
    case 'CLEAR_TECH_FOUR_MESSAGE':
      return Object.assign({}, state, { four: "" });
    case 'UPDATE_TECH_FIVE_MESSAGE':
      return Object.assign({}, state, { five: action.payload });
    case 'CLEAR_TECH_FIVE_MESSAGE':
      return Object.assign({}, state, { five: "" });
    default:
      return state;
  }
}

export const insiderClothingMessage = (state = {one: notHiredMessage, two: notHiredMessage, three: notHiredMessage, four: notHiredMessage, five: notHiredMessage}, action) => {
  switch (action.type) {
    case 'UPDATE_CLOTHING_ONE_MESSAGE':
      return Object.assign({}, state, { one: action.payload });
    case 'CLEAR_CLOTHING_ONE_MESSAGE':
      return Object.assign({}, state, { one: "" });
    case 'UPDATE_CLOTHING_TWO_MESSAGE':
      return Object.assign({}, state, { two: action.payload });
    case 'CLEAR_CLOTHING_TWO_MESSAGE':
      return Object.assign({}, state, { two: "" });
    case 'UPDATE_CLOTHING_THREE_MESSAGE':
      return Object.assign({}, state, { three: action.payload });
    case 'CLEAR_CLOTHING_THREE_MESSAGE':
      return Object.assign({}, state, { three: "" });
    case 'UPDATE_CLOTHING_FOUR_MESSAGE':
      return Object.assign({}, state, { four: action.payload });
    case 'CLEAR_CLOTHING_FOUR_MESSAGE':
      return Object.assign({}, state, { four: "" });
    case 'UPDATE_CLOTHING_FIVE_MESSAGE':
      return Object.assign({}, state, { five: action.payload });
    case 'CLEAR_CLOTHING_FIVE_MESSAGE':
      return Object.assign({}, state, { five: "" });
    default:
      return state;
  }
}

export const insiderPharmaMessage = (state = {one: notHiredMessage, two: notHiredMessage, three: notHiredMessage, four: notHiredMessage, five: notHiredMessage}, action) => {
  switch (action.type) {
    case 'UPDATE_PHARMA_ONE_MESSAGE':
      return Object.assign({}, state, { one: action.payload });
    case 'CLEAR_PHARMA_ONE_MESSAGE':
      return Object.assign({}, state, { one: "" });
    case 'UPDATE_PHARMA_TWO_MESSAGE':
      return Object.assign({}, state, { two: action.payload });
    case 'CLEAR_PHARMA_TWO_MESSAGE':
      return Object.assign({}, state, { two: "" });
    case 'UPDATE_PHARMA_THREE_MESSAGE':
      return Object.assign({}, state, { three: action.payload });
    case 'CLEAR_PHARMA_THREE_MESSAGE':
      return Object.assign({}, state, { three: "" });
    case 'UPDATE_PHARMA_FOUR_MESSAGE':
      return Object.assign({}, state, { four: action.payload });
    case 'CLEAR_PHARMA_FOUR_MESSAGE':
      return Object.assign({}, state, { four: "" });
    case 'UPDATE_PHARMA_FIVE_MESSAGE':
      return Object.assign({}, state, { five: action.payload });
    case 'CLEAR_PHARMA_FIVE_MESSAGE':
      return Object.assign({}, state, { five: "" });
    default:
      return state;
  }
}

export const insiderFoodMessage = (state = {one: notHiredMessage, two: notHiredMessage, three: notHiredMessage, four: notHiredMessage, five: notHiredMessage}, action) => {
  switch (action.type) {
    case 'UPDATE_FOOD_ONE_MESSAGE':
      return Object.assign({}, state, { one: action.payload });
    case 'CLEAR_FOOD_ONE_MESSAGE':
      return Object.assign({}, state, { one: "" });
    case 'UPDATE_FOOD_TWO_MESSAGE':
      return Object.assign({}, state, { two: action.payload });
    case 'CLEAR_FOOD_TWO_MESSAGE':
      return Object.assign({}, state, { two: "" });
    case 'UPDATE_FOOD_THREE_MESSAGE':
      return Object.assign({}, state, { three: action.payload });
    case 'CLEAR_FOOD_THREE_MESSAGE':
      return Object.assign({}, state, { three: "" });
    case 'UPDATE_FOOD_FOUR_MESSAGE':
      return Object.assign({}, state, { four: action.payload });
    case 'CLEAR_FOOD_FOUR_MESSAGE':
      return Object.assign({}, state, { four: "" });
    case 'UPDATE_FOOD_FIVE_MESSAGE':
      return Object.assign({}, state, { five: action.payload });
    case 'CLEAR_FOOD_FIVE_MESSAGE':
      return Object.assign({}, state, { five: "" });
    default:
      return state;
  }
}