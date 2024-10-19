export const topCrypto = async (type: string, quantity: number) => {
  try {
    const response = await fetch("https://api.binance.com/api/v3/ticker/24hr")
    const data = await response.json()

    const topCurrencies = data.filter((item) => item.symbol.includes("USDT"))

    let topXCurrencies

    if (type === "win") {
      topXCurrencies = topCurrencies.sort((a, b) => b["priceChangePercent"] - a["priceChangePercent"]).slice(0, quantity)
    } else if (type === "loss") {
      topXCurrencies = topCurrencies.sort((a, b) => a["priceChangePercent"] - b["priceChangePercent"]).slice(0, quantity)
    } else {
      return
    }


    return topXCurrencies
  } catch (err) {
    console.error(err)
  }
}