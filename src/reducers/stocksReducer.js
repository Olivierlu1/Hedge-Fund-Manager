import { generateTwoRandomNumbers } from '../functions';

const initialTechState = {
  apple: {
    price: "2000",
    sharesOwned: 0,
    totalValue: 0
  },
  google: {
    price: "1200",
    sharesOwned: 0,
    totalValue: 0
  },
  microsoft: {
    price: "150",
    sharesOwned: 0,
    totalValue: 0
  },
  facebook: {
    price: "400",
    sharesOwned: 0,
    totalValue: 0
  },
  dropbox: {
    price: "35",
    sharesOwned: 0,
    totalValue: 0
  },
  flux_val_up_pos: Math.random()*10,
  flux_val_up_neg: Math.random()*5,
  flux_val_down_pos: Math.random()*5,
  flux_val_down_neg: Math.random()*8,
  trend: generateTwoRandomNumbers()
}

const initialPharmaState = {
  pfizer: {
    price: "40",
    sharesOwned: 0,
    totalValue: 0
  },
  novartis: {
    price: "90",
    sharesOwned: 0,
    totalValue: 0
  },
  hoffmann: {
    price: "25",
    sharesOwned: 0,
    totalValue: 0
  },
  merck: {
    price: "80",
    sharesOwned: 0,
    totalValue: 0
  },
  johnson: {
    price: "160",
    sharesOwned: 0,
    totalValue: 0
  },
  flux_val_up_pos: Math.random()*10,
  flux_val_up_neg: Math.random()*5,
  flux_val_down_pos: Math.random()*5,
  flux_val_down_neg: Math.random()*8,
  trend: generateTwoRandomNumbers()
}

const initialFoodState = {
  cargill: {
    price: "10",
    sharesOwned: 0,
    totalValue: 0
  },
  nestle: {
    price: "100",
    sharesOwned: 0,
    totalValue: 0
  },
  pepsi: {
    price: "100",
    sharesOwned: 0,
    totalValue: 0
  },
  archer: {
    price: "5",
    sharesOwned: 0,
    totalValue: 0
  },
  sysco: {
    price: "70",
    sharesOwned: 0,
    totalValue: 0
  },
  flux_val_up_pos: Math.random()*10,
  flux_val_up_neg: Math.random()*5,
  flux_val_down_pos: Math.random()*5,
  flux_val_down_neg: Math.random()*8,
  trend: generateTwoRandomNumbers()
}

const initialClothingState = {
  dior: {
    price: "100",
    sharesOwned: 0,
    totalValue: 0
  },
  nike: {
    price: "75",
    sharesOwned: 0,
    totalValue: 0
  },
  adidas: {
    price: "200",
    sharesOwned: 0,
    totalValue: 0
  },
  gucci: {
    price: "85",
    sharesOwned: 0,
    totalValue: 0
  },
  hermes: {
    price: "105",
    sharesOwned: 0,
    totalValue: 0
  },
  flux_val_up_pos: Math.random()*10,
  flux_val_up_neg: Math.random()*5,
  flux_val_down_pos: Math.random()*5,
  flux_val_down_neg: Math.random()*8,
  trend: generateTwoRandomNumbers()
}

const initialCryptoState = {
  bitcoin: {
    price: "5000",
    sharesOwned: 0,
    totalValue: 0
  },
  eos: {
    price: "6",
    sharesOwned: 0,
    totalValue: 0
  },
  ethereum: {
    price: "2000",
    sharesOwned: 0,
    totalValue: 0
  },
  xrp: {
    price: "850",
    sharesOwned: 0,
    totalValue: 0
  },
  tron: {
    price: "1050",
    sharesOwned: 0,
    totalValue: 0
  }
}

const initialTechPriceState = {
  apple: [],
  google: [],
  microsoft: [],
  facebook: [],
  dropbox: []
}

const initialPharmaPriceState = {
  pfizer: [],
  novartis: [],
  hoffmann: [],
  merck: [],
  johnson: []
}

const initialFoodPriceState = {
  cargill: [],
  nestle: [],
  pepsi: [],
  archer: [],
  sysco: []
}

const initialClothingPriceState = {
  dior: [],
  nike: [],
  adidas: [],
  gucci: [],
  hermes: []
}

const initialCryptoPriceState = {
  bitcoin: [],
  eos: [],
  ethereum: [],
  xrp: [],
  tron: []
}

export const clothingStockPricesReducer = (state = initialClothingPriceState, action) => {
  switch (action.type) {
    case 'ADD_CLOTHING_STOCK_PRICE':
      return {
        ...state,
        dior: [...state.dior, action.payload.dior],
        nike: [...state.nike, action.payload.nike],
        adidas: [...state.adidas, action.payload.adidas],
        gucci: [...state.gucci, action.payload.gucci],
        hermes: [...state.hermes, action.payload.hermes]
      }
    default:
      return state;
  }
}

export const cryptoStockPricesReducer = (state = initialCryptoPriceState, action) => {
  switch (action.type) {
    case 'ADD_CRYPTO_STOCK_PRICE':
      return {
        ...state,
        eos: [...state.eos, action.payload.eos],
        bitcoin: [...state.bitcoin, action.payload.bitcoin],
        xrp: [...state.xrp, action.payload.xrp],
        tron: [...state.tron, action.payload.tron],
        ethereum: [...state.ethereum, action.payload.ethereum]
      }
    default:
      return state;
  }
}

export const techStockPricesReducer = (state = initialTechPriceState, action) => {
  switch (action.type) {
    case 'ADD_TECH_STOCK_PRICE':
      return {
        ...state,
        apple: [...state.apple, action.payload.apple],
        google: [...state.google, action.payload.google],
        dropbox: [...state.dropbox, action.payload.dropbox],
        facebook: [...state.facebook, action.payload.facebook],
        microsoft: [...state.microsoft, action.payload.microsoft]
      }
    default: 
      return state;
  }
}

export const foodStockPricesReducer = (state = initialFoodPriceState, action) => {
  switch (action.type) {
    case 'ADD_FOOD_STOCK_PRICE':
      return {
        ...state,
        cargill: [...state.cargill, action.payload.cargill],
        nestle: [...state.nestle, action.payload.nestle],
        pepsi: [...state.pepsi, action.payload.pepsi],
        archer: [...state.archer, action.payload.archer],
        sysco: [...state.sysco, action.payload.sysco]
      }
    default:
      return state;
  }
}

export const pharmaStockPricesReducer = (state = initialPharmaPriceState, action) => {
  switch (action.type) {
    case 'ADD_PHARMA_STOCK_PRICE':
      return {
        ...state,
        pfizer: [...state.pfizer, action.payload.pfizer],
        novartis: [...state.novartis, action.payload.novartis],
        merck: [...state.merck, action.payload.merck],
        johnson: [...state.johnson, action.payload.johnson],
        hoffmann: [...state.hoffmann, action.payload.hoffmann]
      }
    default:
      return state;
  }
}

// for updating stock prices, stock prices should be in an array
export const pharmaStockReducer = (state = initialPharmaState, action) => {  
  var value;
  switch (action.type) {
    // calls update pharma stock by:
    // updatePharmaStockPrice(stock, values)
    case 'UPDATE_PHARMA_STOCK_PRICE':
      var prices = {};
      for (var i = 0; i < 5; i++) {
        var up_or_down = Math.floor(Math.random() * 2);
        var flux_val = Math.random()*6;
        if (i === 0) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "pfizer") {
              if (action.payload.effect === "positive"){
                prices["pfizer"]=state.pfizer.price*(1+action.payload.percentChange);
              }
              else{
                prices["pfizer"]=state.pfizer.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["pfizer"] = state.pfizer.price*(1+flux_val/100);
            } else {
                prices["pfizer"] = state.pfizer.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 0){
              if (state.up_or_down === 0){
                prices["pfizer"] = state.pfizer.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["pfizer"] = state.pfizer.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 0){
              if (state.up_or_down === 0){
                prices["pfizer"] = state.pfizer.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["pfizer"] = state.pfizer.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["pfizer"] = state.pfizer.price*(1+flux_val/100);
            } else {
                prices["pfizer"] = state.pfizer.price*(1-flux_val/100);
              }
            }
          }
        } 
        else if (i === 1) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "novartis"){
              if (action.payload.effect === "positive"){
                prices["novartis"]=state.novartis.price*(1+action.payload.percentChange);
              }
              else{
                prices["novartis"]=state.novartis.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["novartis"] = state.novartis.price*(1+flux_val/100);
            } else {
                prices["novartis"] = state.novartis.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 1){
              if (up_or_down === 0){
                prices["novartis"] = state.novartis.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["novartis"] = state.novartis.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 1){
              if (up_or_down === 0){
                prices["novartis"] = state.novartis.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["novartis"] = state.novartis.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["novartis"] = state.novartis.price*(1+flux_val/100);
            } else {
                prices["novartis"] = state.novartis.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 2) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "hoffmann"){
              if (action.payload.effect === "positive"){
                prices["hoffmann"]=state.hoffmann.price*(1+action.payload.percentChange);
              }
              else{
                prices["hoffmann"]=state.hoffmann.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["hoffmann"] = state.hoffmann.price*(1+flux_val/100);
            } else {
                prices["hoffmann"] = state.hoffmann.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 2){
              if (up_or_down === 0){
                prices["hoffmann"] = state.hoffmann.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["hoffmann"] = state.hoffmann.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 2){
              if (up_or_down === 0){
                prices["hoffmann"] = state.hoffmann.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["hoffmann"] = state.hoffmann.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["hoffmann"] = state.hoffmann.price*(1+flux_val/100);
            } else {
                prices["hoffmann"] = state.hoffmann.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 3) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "merck"){
              if (action.payload.effect === "positive"){
                prices["merck"]=state.merck.price*(1+action.payload.percentChange);
              }
              else{
                prices["merck"]=state.merck.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["merck"] = state.merck.price*(1+flux_val/100);
            } else {
                prices["merck"] = state.merck.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 3){
              if (up_or_down === 0){
                prices["merck"] = state.merck.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["merck"] = state.merck.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 3){
              if (up_or_down === 0){
                prices["merck"] = state.merck.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["merck"] = state.merck.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["merck"] = state.merck.price*(1+flux_val/100);
            } else {
                prices["merck"] = state.merck.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 4) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "johnson"){
              if (action.payload.effect === "positive"){
                prices["johnson"]=state.johnson.price*(1+action.payload.percentChange);
              }
              else{
                prices["johnson"]=state.johnson.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["johnson"] = state.johnson.price*(1+flux_val/100);
            } else {
                prices["johnson"] = state.johnson.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 4){
              if (up_or_down === 0){
                prices["johnson"] = state.johnson.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["johnson"] = state.johnson.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 4){
              if (up_or_down === 0){
                prices["johnson"] = state.johnson.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["johnson"] = state.johnson.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["johnson"] = state.johnson.price*(1+flux_val/100);
            } else {
                prices["johnson"] = state.johnson.price*(1-flux_val/100);
              }
            }
          }
        }
      }
      return {...state,
                    pfizer: {
                      ...state.pfizer,
                      price: prices.pfizer
                    },
                    novartis: {
                      ...state.novartis,
                      price: prices.novartis
                    },
                    hoffmann: {
                      ...state.hoffmann,
                      price: prices.hoffmann
                    },
                    merck: {
                      ...state.merck,
                      price: prices.merck
                    },
                    johnson: {
                      ...state.johnson,
                      price: prices.johnson
                    }
      }
    case 'BOUGHT_PHARMA_STOCK': 
      switch (action.payload.stock) {
        case 'pfizer':
          value = state.pfizer.sharesOwned + action.payload.amount;
          return {...state,
                    pfizer: {
                      ...state.pfizer,
                      sharesOwned: value,
                      totalValue: value * state.pfizer.price
                    }
           }
        case 'novartis':
          value = state.novartis.sharesOwned + action.payload.amount;
          return {...state,
                    novartis: {
                      ...state.novartis,
                      sharesOwned: value,
                      totalValue: value * state.novartis.price
                    }
           }
        case 'hoffmann':
          value = state.hoffmann.sharesOwned + action.payload.amount;
          return {...state,
                    hoffmann: {
                      ...state.hoffmann,
                      sharesOwned: value,
                      totalValue: value * state.hoffmann.price
                    }
           }
        case 'merck':
          value = state.merck.sharesOwned + action.payload.amount;
          return {...state,
                    merck: {
                      ...state.merck,
                      sharesOwned: value,
                      totalValue: value * state.merck.price
                    }
           }
        case 'johnson':
          value = state.johnson.sharesOwned + action.payload.amount;
          return {...state,
                    johnson: {
                      ...state.johnson,
                      sharesOwned: value,
                      totalValue: value * state.johnson.price
                    }
           }
        default:
          return state;
      }
    case 'SOLD_PHARMA_STOCK':
      switch (action.payload.stock) {
        case 'pfizer':
          value = state.pfizer.sharesOwned - action.payload.amount;
          return {...state,
                    pfizer: {
                      ...state.pfizer,
                      sharesOwned: value,
                      totalValue: value * state.pfizer.price
                    }
           }
        case 'novartis':
          value = state.novartis.sharesOwned - action.payload.amount;
          return {...state,
                    novartis: {
                      ...state.novartis,
                      sharesOwned: value,
                      totalValue: value * state.novartis.price
                    }
           }
        case 'hoffmann':
          value = state.hoffmann.sharesOwned - action.payload.amount;
          return {...state,
                    hoffmann: {
                      ...state.hoffmann,
                      sharesOwned: value,
                      totalValue: value * state.hoffmann.price
                    }
           }
        case 'merck':
          value = state.merck.sharesOwned - action.payload.amount;
          return {...state,
                    merck: {
                      ...state.merck,
                      sharesOwned: value,
                      totalValue: value * state.merck.price
                    }
           }
        case 'johnson':
          value = state.johnson.sharesOwned - action.payload.amount;
          return {...state,
                    johnson: {
                      ...state.johnson,
                      sharesOwned: value,
                      totalValue: value * state.johnson.price
                    }
           }
        default:
          return state;
      }
    default:
      return state;
  }
}

export const cryptoStockReducer = (state = initialCryptoState, action) => {  
  var value;
  switch (action.type) {
    // calls update pharma stock by:
    // updatePharmaStockPrice(stock, values)
    case 'UPDATE_CRYPTO_STOCK_PRICE':
      var prices = {};
      for (var i = 0; i < 5; i++) {
        var up_or_down = Math.floor(Math.random() * 2);
        var flux_val = Math.random()*150;
        if (i === 0) {
          if (up_or_down === 0){
            prices["eos"] = state.eos.price*(1+flux_val/100);
          } else {
            if (state.eos.price*(1-flux_val/100<0)) {
              prices["eos"]=800;
            }
            else{
            prices["eos"] = state.eos.price*(1-flux_val/100);
            }
          }
        }
        else if (i === 1) {
          if (up_or_down === 0){
            prices["xrp"] = state.xrp.price*(1+flux_val/100);
          } else {
            if (state.xrp.price*(1-flux_val/100<0)){
              prices["xrp"]=750;
            }
            else{
            prices["xrp"] = state.xrp.price*(1-flux_val/100);
            }
          }
        }
        else if (i === 2) {
          if (up_or_down === 0){
            prices["ethereum"] = state.ethereum.price*(1+flux_val/100);
          } else {
            if (state.ethereum.price*(1-flux_val/100<0)){
              prices["ethereum"]=200;
            }
            else{
            prices["ethereum"] = state.ethereum.price*(1-flux_val/100);
            }
          }
        }
        else if (i === 3) {
          if (up_or_down === 0){
            prices["bitcoin"] = state.bitcoin.price*(1+flux_val/100);
          } else {
            if (state.bitcoin.price * (1-flux_val/100)<0){
              prices["bitcoin"]=1000;
            }
            else{
            prices["bitcoin"] = state.bitcoin.price*(1-flux_val/100);
            }
          }
        }
        else if (i === 4) {
          if (up_or_down === 0){
            prices["tron"] = state.tron.price*(1+flux_val/100);
          } else {
            if (state.bitcoin.price * (1-flux_val/100)<0){
              prices["tron"]=500;
            }
            else{
            prices["tron"] = state.tron.price*(1-flux_val/100);
            }
          }
        }
      }
      return {...state,
                    eos: {
                      ...state.eos,
                      price: prices.eos
                    },
                    xrp: {
                      ...state.xrp,
                      price: prices.xrp
                    },
                    ethereum: {
                      ...state.ethereum,
                      price: prices.ethereum
                    },
                    bitcoin: {
                      ...state.bitcoin,
                      price: prices.bitcoin
                    },
                    tron: {
                      ...state.tron,
                      price: prices.tron
                    }
      }
    case 'BOUGHT_CRYPTO_STOCK': 
      switch (action.payload.stock) {
        case 'eos':
          value = state.eos.sharesOwned + action.payload.amount;
          return {...state,
                    eos: {
                      ...state.eos,
                      sharesOwned: value,
                      totalValue: value * state.eos.price
                    }
           }
        case 'xrp':
          value = state.xrp.sharesOwned + action.payload.amount;
          return {...state,
                    xrp: {
                      ...state.xrp,
                      sharesOwned: value,
                      totalValue: value * state.xrp.price
                    }
           }
        case 'ethereum':
          value = state.ethereum.sharesOwned + action.payload.amount;
          return {...state,
                    ethereum: {
                      ...state.ethereum,
                      sharesOwned: value,
                      totalValue: value * state.ethereum.price
                    }
           }
        case 'bitcoin':
          value = state.bitcoin.sharesOwned + action.payload.amount;
          return {...state,
                    bitcoin: {
                      ...state.bitcoin,
                      sharesOwned: value,
                      totalValue: value * state.bitcoin.price
                    }
           }
        case 'tron':
          value = state.tron.sharesOwned + action.payload.amount;
          return {...state,
                    tron: {
                      ...state.tron,
                      sharesOwned: value,
                      totalValue: value * state.tron.price
                    }
           }
        default:
          return state;
      }
    case 'SOLD_CRYPTO_STOCK':
      switch (action.payload.stock) {
        case 'eos':
          value = state.eos.sharesOwned - action.payload.amount;
          return {...state,
                    eos: {
                      ...state.eos,
                      sharesOwned: value,
                      totalValue: value * state.eos.price
                    }
           }
        case 'xrp':
          value = state.xrp.sharesOwned - action.payload.amount;
          return {...state,
                    xrp: {
                      ...state.xrp,
                      sharesOwned: value,
                      totalValue: value * state.xrp.price
                    }
           }
        case 'ethereum':
          value = state.ethereum.sharesOwned - action.payload.amount;
          return {...state,
                    ethereum: {
                      ...state.ethereum,
                      sharesOwned: value,
                      totalValue: value * state.ethereum.price
                    }
           }
        case 'bitcoin':
          value = state.bitcoin.sharesOwned - action.payload.amount;
          return {...state,
                    bitcoin: {
                      ...state.bitcoin,
                      sharesOwned: value,
                      totalValue: value * state.bitcoin.price
                    }
           }
        case 'tron':
          value = state.tron.sharesOwned - action.payload.amount;
          return {...state,
                    tron: {
                      ...state.tron,
                      sharesOwned: value,
                      totalValue: value * state.tron.price
                    }
           }
        default:
          return state;
      }
    default:
      return state;
  }
}

export const techStockReducer = (state = initialTechState, action) => {
  var value;
  switch (action.type) {
    case 'UPDATE_TECH_STOCK_PRICE':
      var prices = {};
      for (var i = 0; i < 5; i++) {
        var up_or_down = Math.floor(Math.random() * 2);
        var flux_val = Math.random()*6;
        if (i === 0) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "apple"){
              if (action.payload.effect === "positive"){
                prices["apple"]=state.apple.price*(1+action.payload.percentChange);
              }
              else{
                prices["apple"]=state.apple.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["apple"] = state.apple.price*(1+flux_val/100);
            } else {
                prices["apple"] = state.apple.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 0){
              if (up_or_down === 0){
                prices["apple"] = state.apple.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["apple"] = state.apple.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 0){
              if (up_or_down === 0){
                prices["apple"] = state.apple.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["apple"] = state.apple.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["apple"] = state.apple.price*(1+flux_val/100);
            } else {
                prices["apple"] = state.apple.price*(1-flux_val/100);
              }
            }
          }
        } 
        else if (i === 1) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "google"){
              if (action.payload.effect === "positive"){
                prices["google"]=state.google.price*(1+action.payload.percentChange);
              }
              else{
                prices["google"]=state.google.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["google"] = state.google.price*(1+flux_val/100);
            } else {
                prices["google"] = state.google.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 1){
              if (up_or_down === 0){
                prices["google"] = state.google.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["google"] = state.google.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 1){
              if (up_or_down === 0){
                prices["google"] = state.google.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["google"] = state.google.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["google"] = state.google.price*(1+flux_val/100);
            } else {
                prices["google"] = state.google.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 2) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "microsoft"){
              if (action.payload.effect === "positive"){
                prices["microsoft"]=state.microsoft.price*(1+action.payload.percentChange);
              }
              else{
                prices["microsoft"]=state.microsoft.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["microsoft"] = state.microsoft.price*(1+flux_val/100);
            } else {
                prices["microsoft"] = state.microsoft.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 2){
              if (up_or_down === 0){
                prices["microsoft"] = state.microsoft.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["microsoft"] = state.microsoft.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 2){
              if (up_or_down === 0){
                prices["microsoft"] = state.microsoft.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["microsoft"] = state.microsoft.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["microsoft"] = state.microsoft.price*(1+flux_val/100);
            } else {
                prices["microsoft"] = state.microsoft.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 3) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "facebook"){
              if (action.payload.effect === "positive"){
                prices["facebook"]=state.facebook.price*(1+action.payload.percentChange);
              }
              else{
                prices["facebook"]=state.facebook.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["facebook"] = state.facebook.price*(1+flux_val/100);
            } else {
                prices["facebook"] = state.facebook.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 3){
              if (up_or_down === 0){
                prices["facebook"] = state.facebook.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["facebook"] = state.facebook.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 3){
              if (up_or_down === 0){
                prices["facebook"] = state.facebook.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["facebook"] = state.facebook.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["facebook"] = state.facebook.price*(1+flux_val/100);
            } else {
                prices["facebook"] = state.facebook.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 4) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "dropbox"){
              if (action.payload.effect === "positive"){
                prices["dropbox"]=state.dropbox.price*(1+action.payload.percentChange);
              }
              else{
                prices["dropbox"]=state.dropbox.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["dropbox"] = state.dropbox.price*(1+flux_val/100);
            } else {
                prices["dropbox"] = state.dropbox.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 4){
              if (up_or_down === 0){
                prices["dropbox"] = state.dropbox.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["dropbox"] = state.dropbox.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 4){
              if (up_or_down === 0){
                prices["dropbox"] = state.dropbox.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["dropbox"] = state.dropbox.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["dropbox"] = state.dropbox.price*(1+flux_val/100);
            } else {
                prices["dropbox"] = state.dropbox.price*(1-flux_val/100);
              }
            }
          }
        }
      }
      return {...state,
                    apple: {
                      ...state.apple,
                      price: prices.apple
                    },
                    google: {
                      ...state.google,
                      price: prices.google
                    },
                    microsoft: {
                      ...state.microsoft,
                      price: prices.microsoft
                    },
                    facebook: {
                      ...state.facebook,
                      price: prices.facebook
                    },
                    dropbox: {
                      ...state.dropbox,
                      price: prices.dropbox
                    }
      }
    case 'BOUGHT_TECH_STOCK': // called like boughtStocks("apple", 20)
      switch (action.payload.stock) {
        case 'apple':
          value = state.apple.sharesOwned + action.payload.amount;
          return {...state,
                    apple: {
                      ...state.apple,
                      sharesOwned: value,
                      totalValue: value * state.apple.price
                    }
           }
        case 'google':
          value = state.google.sharesOwned + action.payload.amount;
          return {...state,
                    google: {
                      ...state.google,
                      sharesOwned: value,
                      totalValue: value * state.google.price
                    }
           }
        case 'microsoft':
          value = state.microsoft.sharesOwned + action.payload.amount;
          return {...state,
                    microsoft: {
                      ...state.microsoft,
                      sharesOwned: value,
                      totalValue: value * state.microsoft.price
                    }
           }
        case 'facebook':
          value = state.facebook.sharesOwned + action.payload.amount;
          return {...state,
                    facebook: {
                      ...state.facebook,
                      sharesOwned: value,
                      totalValue: value * state.facebook.price
                    }
           }
        case 'dropbox':
          value = state.dropbox.sharesOwned + action.payload.amount;
          return {...state,
                    dropbox: {
                      ...state.dropbox,
                      sharesOwned: value,
                      totalValue: value * state.dropbox.price
                    }
           }
        default:
          return state;
      }
    case 'SOLD_TECH_STOCK':
      switch (action.payload.stock) {
        case 'apple':
          value = state.apple.sharesOwned - action.payload.amount;
          return {...state,
                    apple: {
                      ...state.apple,
                      sharesOwned: value,
                      totalValue: value * state.apple.price
                    }
           }
        case 'google':
          value = state.google.sharesOwned - action.payload.amount;
          return {...state,
                    google: {
                      ...state.google,
                      sharesOwned: value,
                      totalValue: value * state.google.price
                    }
           }
        case 'microsoft':
          value = state.microsoft.sharesOwned - action.payload.amount;
          return {...state,
                    microsoft: {
                      ...state.microsoft,
                      sharesOwned: value,
                      totalValue: value * state.microsoft.price
                    }
           }
        case 'facebook':
          value = state.facebook.sharesOwned - action.payload.amount;
          return {...state,
                    facebook: {
                      ...state.facebook,
                      sharesOwned: value,
                      totalValue: value * state.facebook.price
                    }
           }
        case 'dropbox':
          value = state.dropbox.sharesOwned - action.payload.amount;
          return {...state,
                    dropbox: {
                      ...state.dropbox,
                      sharesOwned: value,
                      totalValue: value * state.dropbox.price
                    }
           }
        default:
          return state;
      }
    default:
      return state;
  }
}

export const clothingStockReducer = (state = initialClothingState, action) => {
  var value;
  switch (action.type) {
    case 'UPDATE_CLOTHING_STOCK_PRICE':
    var prices = {};
      for (var i = 0; i < 5; i++) {
        var up_or_down = Math.floor(Math.random() * 2);
        var flux_val = Math.random()*6;
        if (i === 0) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "dior"){
              if (action.payload.effect === "positive"){
                prices["dior"]=state.dior.price*(1+action.payload.percentChange);
              }
              else{
                prices["dior"]=state.dior.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["dior"] = state.dior.price*(1+flux_val/100);
            } else {
                prices["dior"] = state.dior.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 0){
              if (up_or_down === 0){
                prices["dior"] = state.dior.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["dior"] = state.dior.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 0){
              if (up_or_down === 0){
                prices["dior"] = state.dior.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["dior"] = state.dior.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["dior"] = state.dior.price*(1+flux_val/100);
            } else {
                prices["dior"] = state.dior.price*(1-flux_val/100);
              }
            }
          }
        } 
        else if (i === 1) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "nike"){
              if (action.payload.effect === "positive"){
                prices["nike"]=state.nike.price*(1+action.payload.percentChange);
              }
              else{
                prices["nike"]=state.nike.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["nike"] = state.nike.price*(1+flux_val/100);
            } else {
                prices["nike"] = state.nike.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 1){
              if (up_or_down === 0){
                prices["nike"] = state.nike.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["nike"] = state.nike.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 1){
              if (up_or_down === 0){
                prices["nike"] = state.nike.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["nike"] = state.nike.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["nike"] = state.nike.price*(1+flux_val/100);
            } else {
                prices["nike"] = state.nike.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 2) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "adidas"){
              if (action.payload.effect === "positive"){
                prices["adidas"]=state.adidas.price*(1+action.payload.percentChange);
              }
              else{
                prices["adidas"]=state.adidas.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["adidas"] = state.adidas.price*(1+flux_val/100);
            } else {
                prices["adidas"] = state.adidas.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 2){
              if (up_or_down === 0){
                prices["adidas"] = state.adidas.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["adidas"] = state.adidas.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 2){
              if (up_or_down === 0){
                prices["adidas"] = state.adidas.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["adidas"] = state.adidas.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["adidas"] = state.adidas.price*(1+flux_val/100);
            } else {
                prices["adidas"] = state.adidas.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 3) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "gucci"){
              if (action.payload.effect === "positive"){
                prices["gucci"]=state.gucci.price*(1+action.payload.percentChange);
              }
              else{
                prices["gucci"]=state.gucci.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["gucci"] = state.gucci.price*(1+flux_val/100);
            } else {
                prices["gucci"] = state.gucci.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 3){
              if (up_or_down === 0){
                prices["gucci"] = state.gucci.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["gucci"] = state.gucci.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 3){
              if (up_or_down === 0){
                prices["gucci"] = state.gucci.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["gucci"] = state.gucci.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["gucci"] = state.gucci.price*(1+flux_val/100);
            } else {
                prices["gucci"] = state.gucci.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 4) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "hermes"){
              if (action.payload.effect === "positive"){
                prices["hermes"]=state.hermes.price*(1+action.payload.percentChange);
              }
              else{
                prices["hermes"]=state.hermes.price*(1 - action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["hermes"] = state.hermes.price*(1+flux_val/100);
            } else {
                prices["hermes"] = state.hermes.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 4){
              if (up_or_down === 0){
                prices["hermes"] = state.hermes.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["hermes"] = state.hermes.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 4){
              if (up_or_down === 0){
                prices["hermes"] = state.hermes.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["hermes"] = state.hermes.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["hermes"] = state.hermes.price*(1+flux_val/100);
            } else {
                prices["hermes"] = state.hermes.price*(1-flux_val/100);
              }
            }
          }
        }
      }
      return {...state,
                    dior: {
                      ...state.dior,
                      price: prices.dior
                    },
                    nike: {
                      ...state.nike,
                      price: prices.nike
                    },
                    adidas: {
                      ...state.adidas,
                      price: prices.adidas
                    },
                    gucci: {
                      ...state.gucci,
                      price: prices.gucci
                    },
                    hermes: {
                      ...state.hermes,
                      price: prices.hermes
                    }
      }
    case 'BOUGHT_CLOTHING_STOCK': 
      switch (action.payload.stock) {
        case 'dior':
          value = state.dior.sharesOwned + action.payload.amount;
          return {...state,
                    dior: {
                      ...state.dior,
                      sharesOwned: value,
                      totalValue: value * state.dior.price
                    }
           }
        case 'nike':
          value = state.nike.sharesOwned + action.payload.amount;
          return {...state,
                    nike: {
                      ...state.nike,
                      sharesOwned: value,
                      totalValue: value * state.nike.price
                    }
           }
        case 'adidas':
          value = state.adidas.sharesOwned + action.payload.amount;
          return {...state,
                    adidas: {
                      ...state.adidas,
                      sharesOwned: value,
                      totalValue: value * state.adidas.price
                    }
           }
        case 'gucci':
          value = state.gucci.sharesOwned + action.payload.amount;
          return {...state,
                    gucci: {
                      ...state.gucci,
                      sharesOwned: value,
                      totalValue: value * state.gucci.price
                    }
           }
        case 'hermes':
          value = state.hermes.sharesOwned + action.payload.amount;
          return {...state,
                    hermes: {
                      ...state.hermes,
                      sharesOwned: value,
                      totalValue: value * state.hermes.price
                    }
           }
        default:
          return state;
      }
    case 'SOLD_CLOTHING_STOCK':
      switch (action.payload.stock) {
        case 'dior':
          value = state.dior.sharesOwned - action.payload.amount;
          return {...state,
                    dior: {
                      ...state.dior,
                      sharesOwned: value,
                      totalValue: value * state.dior.price
                    }
           }
        case 'nike':
          value = state.nike.sharesOwned - action.payload.amount;
          return {...state,
                    nike: {
                      ...state.nike,
                      sharesOwned: value,
                      totalValue: value * state.nike.price
                    }
           }
        case 'adidas':
          value = state.adidas.sharesOwned - action.payload.amount;
          return {...state,
                    adidas: {
                      ...state.adidas,
                      sharesOwned: value,
                      totalValue: value * state.adidas.price
                    }
           }
        case 'gucci':
          value = state.gucci.sharesOwned - action.payload.amount;
          return {...state,
                    gucci: {
                      ...state.gucci,
                      sharesOwned: value,
                      totalValue: value * state.gucci.price
                    }
           }
        case 'hermes':
          value = state.hermes.sharesOwned - action.payload.amount;
          return {...state,
                    hermes: {
                      ...state.hermes,
                      sharesOwned: value,
                      totalValue: value * state.hermes.price
                    }
           }
        default:
          return state;
      }
    default:
      return state;
  }
}

export const foodStockReducer = (state = initialFoodState, action) => {
  var value; 
  switch (action.type) {
    case 'UPDATE_FOOD_STOCK_PRICE':
      var prices = {};
      for (var i = 0; i < 5; i++) {
        var up_or_down = Math.floor(Math.random() * 2);
        var flux_val = Math.random()*6;
        if (i === 0) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "cargill"){
              if (action.payload.effect === "positive"){
                prices["cargill"]=state.cargill.price*(1+action.payload.percentChange);
              }
              else{
                prices["cargill"]=state.cargill.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["cargill"] = state.cargill.price*(1+flux_val/100);
            } else {
                prices["cargill"] = state.cargill.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 0){
              if (up_or_down === 0){
                prices["cargill"] = state.cargill.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["cargill"] = state.cargill.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 0){
              if (up_or_down === 0){
                prices["cargill"] = state.cargill.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["cargill"] = state.cargill.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["cargill"] = state.cargill.price*(1+flux_val/100);
            } else {
                prices["cargill"] = state.cargill.price*(1-flux_val/100);
              }
            }
          }
        } 
        else if (i === 1) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "nestle"){
              if (action.payload.effect === "positive"){
                prices["nestle"]=state.nestle.price*(1+action.payload.percentChange);
              }
              else{
                prices["nestle"]=state.nestle.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["nestle"] = state.nestle.price*(1+flux_val/100);
            } else {
                prices["nestle"] = state.nestle.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 1){
              if (up_or_down === 0){
                prices["nestle"] = state.nestle.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["nestle"] = state.nestle.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 1){
              if (up_or_down === 0){
                prices["nestle"] = state.nestle.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["nestle"] = state.nestle.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["nestle"] = state.nestle.price*(1+flux_val/100);
            } else {
                prices["nestle"] = state.nestle.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 2) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "pepsi"){
              if (action.payload.effect === "positive"){
                prices["pepsi"]=state.pepsi.price*(1+action.payload.percentChange);
              }
              else{
                prices["pepsi"]=state.pepsi.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["pepsi"] = state.pepsi.price*(1+flux_val/100);
            } else {
                prices["pepsi"] = state.pepsi.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 2){
              if (up_or_down === 0){
                prices["pepsi"] = state.pepsi.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["pepsi"] = state.pepsi.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 2){
              if (up_or_down === 0){
                prices["pepsi"] = state.pepsi.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["pepsi"] = state.pepsi.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["pepsi"] = state.pepsi.price*(1+flux_val/100);
            } else {
                prices["pepsi"] = state.pepsi.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 3) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "archer"){
              if (action.payload.effect === "positive"){
                prices["archer"]=state.archer.price*(1+action.payload.percentChange);
              }
              else{
                prices["archer"]=state.archer.price*(1- action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["archer"] = state.archer.price*(1+flux_val/100);
            } else {
                prices["archer"] = state.archer.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 3){
              if (up_or_down === 0){
                prices["archer"] = state.archer.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["archer"] = state.archer.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 3){
              if (up_or_down === 0){
                prices["archer"] = state.archer.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["archer"] = state.archer.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["archer"] = state.archer.price*(1+flux_val/100);
            } else {
                prices["archer"] = state.archer.price*(1-flux_val/100);
              }
            }
          }
        }
        else if (i === 4) {
          if (action.payload.gameRound === action.payload.eventRound){
            if (action.payload.stock === "sysco"){
              if (action.payload.effect === "positive"){
                prices["sysco"]=state.sysco.price*(1+action.payload.percentChange);
              }
              else{
                prices["sysco"]=state.sysco.price*(1 - action.payload.percentChange);
              }
            }
            else {
              if (up_or_down === 0){
                prices["sysco"] = state.sysco.price*(1+flux_val/100);
            } else {
                prices["sysco"] = state.sysco.price*(1-flux_val/100);
              }
            }
          }
          else {
            if (state.trend[0] === 4){
              if (up_or_down === 0){
                prices["sysco"] = state.sysco.price*(1+state.flux_val_up_pos/100);
            } else {
                prices["sysco"] = state.sysco.price*(1-state.flux_val_up_neg/100);
              }
            }
            else if (state.trend[1] === 4){
              if (up_or_down === 0){
                prices["sysco"] = state.sysco.price*(1+state.flux_val_down_pos/100);
            } else {
                prices["sysco"] = state.sysco.price*(1-state.flux_val_down_neg/100);
              }
            }
            else{
              if (up_or_down === 0){
                prices["sysco"] = state.sysco.price*(1+flux_val/100);
            } else {
                prices["sysco"] = state.sysco.price*(1-flux_val/100);
              }
            }
          }
        }
      }
      return {...state,
                    cargill: {
                      ...state.cargill,
                      price: prices.cargill
                    },
                    nestle: {
                      ...state.nestle,
                      price: prices.nestle
                    },
                    pepsi: {
                      ...state.pepsi,
                      price: prices.pepsi
                    },
                    archer: {
                      ...state.archer,
                      price: prices.archer
                    },
                    sysco: {
                      ...state.sysco,
                      price: prices.sysco
                    }
      }
    case 'BOUGHT_FOOD_STOCK': 
      switch (action.payload.stock) {
        case 'cargill':
          value = state.cargill.sharesOwned + action.payload.amount;
          return {...state,
                    cargill: {
                      ...state.cargill,
                      sharesOwned: value,
                      totalValue: value * state.cargill.price
                    }
           }
        case 'nestle':
          value = state.nestle.sharesOwned + action.payload.amount;
          return {...state,
                    nestle: {
                      ...state.nestle,
                      sharesOwned: value,
                      totalValue: value * state.nestle.price
                    }
           }
        case 'pepsi':
          value = state.pepsi.sharesOwned + action.payload.amount;
          return {...state,
                    pepsi: {
                      ...state.pepsi,
                      sharesOwned: value,
                      totalValue: value * state.pepsi.price
                    }
           }
        case 'archer':
          value = state.archer.sharesOwned + action.payload.amount;
          return {...state,
                    archer: {
                      ...state.archer,
                      sharesOwned: value,
                      totalValue: value * state.archer.price
                    }
           }
        case 'sysco':
          value = state.sysco.sharesOwned + action.payload.amount;
          return {...state,
                    sysco: {
                      ...state.sysco,
                      sharesOwned: value,
                      totalValue: value * state.sysco.price
                    }
           }
        default:
          return state;
      }
    case 'SOLD_FOOD_STOCK':
      switch (action.payload.stock) {
        case 'cargill':
          value = state.cargill.sharesOwned - action.payload.amount;
          return {...state,
                    cargill: {
                      ...state.cargill,
                      sharesOwned: value,
                      totalValue: value * state.cargill.price
                    }
           }
        case 'nestle':
          value = state.nestle.sharesOwned - action.payload.amount;
          return {...state,
                    nestle: {
                      ...state.nestle,
                      sharesOwned: value,
                      totalValue: value * state.nestle.price
                    }
           }
        case 'pepsi':
          value = state.pepsi.sharesOwned - action.payload.amount;
          return {...state,
                    pepsi: {
                      ...state.pepsi,
                      sharesOwned: value,
                      totalValue: value * state.pepsi.price
                    }
           }
        case 'archer':
          value = state.archer.sharesOwned - action.payload.amount;
          return {...state,
                    archer: {
                      ...state.archer,
                      sharesOwned: value,
                      totalValue: value * state.archer.price
                    }
           }
        case 'sysco':
          value = state.sysco.sharesOwned - action.payload.amount;
          return {...state,
                    sysco: {
                      ...state.sysco,
                      sharesOwned: value,
                      totalValue: value * state.sysco.price
                    }
           }
        default:
          return state;
      }
    default:
      return state;
  }
}