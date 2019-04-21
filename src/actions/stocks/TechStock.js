export function updateTechStockPrice(value) {
  return {
    type: "UPDATE_TECH_STOCK_PRICE",
    payload: {
      gameRound: value.gameRound,
      eventRound: value.eventRound,
      stock: value.stock,
      percentChange: value.percentChange,
      effect: value.effect
    }
  }
}

export function boughtTechStock(stockName, amount) {
  return {
    type: "BOUGHT_TECH_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}

export function soldTechStock(stockName, amount) {
  return {
    type: "SOLD_TECH_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}