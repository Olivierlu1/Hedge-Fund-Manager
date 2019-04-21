import { combineReducers } from "redux";
import { insiderTechReducer, insiderPharmaReducer, insiderFoodReducer, insiderClothingReducer, insiderTechMessage, insiderClothingMessage, insiderPharmaMessage, insiderFoodMessage } from './insiderReducers';
import { pharmaStockReducer, techStockReducer, clothingStockReducer, foodStockReducer, foodStockPricesReducer, techStockPricesReducer, pharmaStockPricesReducer, clothingStockPricesReducer, cryptoStockPricesReducer, cryptoStockReducer } from './stocksReducer';
import { generateRandomIndex } from '../functions';
import { techRandomEventReducer, clothingRandomEventReducer, foodRandomEventReducer, pharmaRandomEventReducer } from './eventsReducer'
import { charityReducer, copsReducer } from './changeGameReducer';

const statsReducer = (state = {netWorth: 1000000, netCash: 1000000, criminalLevel: 30, publicRep: 0, informantsHired: 0, lastNetWorth: 1000000, date: {
  month: 1,
  year: 2020
}}, action) => {
  switch (action.type) {
    case 'ADD_NETWORTH':
      const newObject = Object.assign({}, state, { netWorth: state.netWorth + action.payload });
      return newObject;
    case 'SUBTRACT_NETWORTH':
      const newObject1 = Object.assign({}, state, { netWorth: state.netWorth - action.payload });
      return newObject1;
    case 'HIRED_INFORMANT':
      return Object.assign({}, state, { informantsHired: state.informantsHired + 1 });
    case "UPDATE_LAST_NETCASH":
      return Object.assign({}, state, { lastNetWorth: action.payload });
    case "UPDATE_NETCASH":
      const newObject2 = Object.assign({}, state, { netCash: action.payload });
      return newObject2;
    case "BOUGHT_CHARITY":
      if (action.payload.charityLevel === 1){
          if (state.publicRep + 2 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 2 });
          }
        }
        else if (action.payload.charityLevel === 2){
          if (state.publicRep + 3 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 3 });
          }
        }
        else if (action.payload.charityLevel === 3){
          if (state.publicRep + 5 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 5 });
          }
        }
        else if (action.payload.charityLevel === 4){
          if (state.publicRep + 6 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 6 });
          }
        }
        else if (action.payload.charityLevel === 5){
          if (state.publicRep + 7 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 7 });
          }
        }
        else if (action.payload.charityLevel === 6){
          if (state.publicRep + 9 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 9 });
          }
        }
        else if (action.payload.charityLevel === 7){
          if (state.publicRep + 10 > 100){
            return Object.assign({}, state ,{publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 10 });
          }
        }
        else if (action.payload.charityLevel === 8){
          if (state.publicRep + 12 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 12 });
          }
        }
        else if (action.payload.charityLevel === 9){
          if (state.publicRep + 13 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 13 });
          }
        }
        else if (action.payload.charityLevel === 10){
          if (state.publicRep + 15 > 100){
            return Object.assign({}, state, {publicRep:100});
          }
          else{
            return Object.assign({}, state, { publicRep: state.publicRep + 15 });
          }
        }
      return state;
    case 'BOUGHT_COPS':
    if (action.payload.copLevel === 1){
        if (state.criminalLevel - 1 < 0){
          return Object.assign({}, state, {criminalLevel:0});
        }
        else{
          return Object.assign({}, state, { criminalLevel: state.criminalLevel - 1 });
        }
      }
    else if (action.payload.copLevel === 2){
      if (state.criminalLevel - 3 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 3 });
      }
    }
    else if (action.payload.copLevel === 3){
      if (state.criminalLevel - 5 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 5 });
      }
    }
    else if (action.payload.copLevel === 4){
      if (state.criminalLevel - 9 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 9 });
      }
    }
    else if (action.payload.copLevel === 5){
      if (state.criminalLevel - 18 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 18 });
      }
    }
    else if (action.payload.copLevel === 6){
      if (state.criminalLevel - 22 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 22 });
      }
    }
    else if (action.payload.copLevel === 7){
      if (state.criminalLevel - 24 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 24 });
      }
    }
    else if (action.payload.copLevel === 8){
      if (state.criminalLevel - 30 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 30 });
      }
    }
    else if (action.payload.copLevel === 9){
      if (state.criminalLevel - 33 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 33 });
      }
    }
    else if (action.payload.copLevel === 10){
      if (state.criminalLevel - 36 < 0){
        return Object.assign({}, state, {criminalLevel:0});
      }
      else{
        return Object.assign({}, state, { criminalLevel: state.criminalLevel - 36 });
      }
    }
     return state;
    case 'UPDATE_CRIMINAL_RECORD': // called when insider is bought
      if (action.payload.level===1){
        return Object.assign({}, state, { criminalLevel: state.criminalLevel+Math.round((1.1-state.publicRep/100)*18) });
      }
      else if (action.payload.level === 2){
        return Object.assign({}, state, { criminalLevel: state.criminalLevel+Math.round((1.1-state.publicRep/100)*15) });
      }
      else if (action.payload.level === 3){
        return Object.assign({}, state, { criminalLevel: state.criminalLevel+Math.round((1.1-state.publicRep/100)*12) });
      }
      else if (action.payload.level === 4){
        return Object.assign({}, state, { criminalLevel: state.criminalLevel+Math.round((1.1-state.publicRep/100)*8) });
      }
      else if (action.payload.level === 5){
        return Object.assign({}, state, { criminalLevel: state.criminalLevel+Math.round((1.1-state.publicRep/100)*6) });
      }
    case 'ROUND_UPDATE_CRIMINAL_LEVEL': // called when next round is pressed
      return Object.assign({}, state, { criminalLevel: state.criminalLevel+Math.round((1.1-state.publicRep/100)*3) });
    case 'ADVANCE_DATE':
      if (state.date.month === 12) {
        return {
          ...state,
            date: {
              ...state.date,
              month: 1,
              year: state.date.year + 1
            }
        };
      } else {
        return {
          ...state,
            date: {
              ...state.date,
              month: state.date.month + 1
            }
        }
      }
    default:
      return state;
  } 
}

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'CLEAR_EVENTS':
      return [];
    default:
      return state;
  }
}

export default combineReducers({
  stats: statsReducer,
  techMessage: insiderTechMessage,
  pharmaMessage: insiderPharmaMessage,
  foodMessage: insiderFoodMessage,
  clothingMessage: insiderClothingMessage,
  insiderTech: insiderTechReducer,
  insiderPharma: insiderPharmaReducer,
  insiderFood: insiderFoodReducer,
  insiderClothing: insiderClothingReducer,
  techStock: techStockReducer,
  pharmaStock: pharmaStockReducer,
  clothingStock: clothingStockReducer,
  foodStock: foodStockReducer,
  events: eventsReducer,
  techEvent: techRandomEventReducer,
  clothingEvent: clothingRandomEventReducer,
  foodEvent: foodRandomEventReducer,
  pharmaEvent: pharmaRandomEventReducer,
  foodPrices: foodStockPricesReducer,
  techPrices: techStockPricesReducer,
  clothingPrices: clothingStockPricesReducer,
  pharmaPrices: pharmaStockPricesReducer,
  cryptoPrices: cryptoStockPricesReducer,
  cryptoStock: cryptoStockReducer,
  charity: charityReducer,
  cops: copsReducer
});

