import {CryptoData} from "@/types/crypto-data";


export const topCrypto = async (type: string | null, quantity: number) => {
    try {
        const response = await fetch("https://api.binance.com/api/v3/ticker/24hr")
        const data = await response.json()

        const topCurrencies = data.filter((item: CryptoData) => item.symbol.includes("USDT"))

        let topXCurrencies: CryptoData[] = []

        if (type === "win") {
            topXCurrencies = topCurrencies.sort((a: CryptoData, b: CryptoData) => Number(b["priceChangePercent"]) - Number(a["priceChangePercent"])).slice(0, quantity)
        } else if (type === "loss") {
            topXCurrencies = topCurrencies.sort((a: CryptoData, b: CryptoData) => Number(a["priceChangePercent"]) - Number(b["priceChangePercent"])).slice(0, quantity)
        } else {
            return
        }


        return topXCurrencies
    } catch (err) {
        console.error(err)
    }
}