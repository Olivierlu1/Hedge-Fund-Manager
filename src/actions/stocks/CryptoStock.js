export function addCryptoStockPrice(value) {
  return {
    type: "ADD_CRYPTO_STOCK_PRICE",
    payload: {
      eos: value.eos,
      bitcoin: value.bitcoin,
      ethereum: value.ethereum,
      tron: value.tron,
      xrp: value.xrp
    }
  }
}

export function updateCryptoStockPrice() {
  return {
    type: "UPDATE_CRYPTO_STOCK_PRICE"
  }
}

export function boughtCryptoStock(stockName, amount) {
  return {
    type: "BOUGHT_CRYPTO_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}

export function soldCryptoStock(stockName, amount) {
  return {
    type: "SOLD_CRYPTO_STOCK",
    payload: {
      stock: stockName,
      amount: amount
    }
  }
}