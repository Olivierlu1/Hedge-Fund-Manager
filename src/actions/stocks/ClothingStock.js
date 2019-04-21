export function updateClothingStockPrice(value) {
  return {
    type: "UPDATE_CLOTHING_STOCK_PRICE",
    payload: {
      gameRound: value.gameRound,
      eventRound: value.eventRound,
      stock: value.stock,
      percentChange: value.percentChange,
      effect: value.effect
    }
  }
}

export function boughtClothingStock(stockName, amount) {
  return {
    type: "BOUGHT_CLOTHING_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}

export function soldClothingStock(stockName, amount) {
  return {
    type: "SOLD_CLOTHING_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}