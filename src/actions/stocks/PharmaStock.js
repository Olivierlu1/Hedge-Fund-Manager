export function updatePharmaStockPrice(value) {
  return {
    type: "UPDATE_PHARMA_STOCK_PRICE",
    payload: {
      gameRound: value.gameRound,
      eventRound: value.eventRound,
      stock: value.stock,
      percentChange: value.percentChange,
      effect: value.effect
    }
  }
}

export function boughtPharmaStock(stockName, amount) {
  return {
    type: "BOUGHT_PHARMA_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}

export function soldPharmaStock(stockName, amount) {
  return {
    type: "SOLD_PHARMA_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}