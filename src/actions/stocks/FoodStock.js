export function updateFoodStockPrice(value) {
  return {
    type: "UPDATE_FOOD_STOCK_PRICE",
    payload: {
      gameRound: value.gameRound,
      eventRound: value.eventRound,
      stock: value.stock,
      percentChange: value.percentChange,
      effect: value.effect
    }
  }
}

export function boughtFoodStock(stockName, amount) {
  return {
    type: "BOUGHT_FOOD_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}

export function soldFoodStock(stockName, amount) {
  return {
    type: "SOLD_FOOD_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}