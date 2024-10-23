import {CryptoData} from "@/types/crypto-data";

export const topXCrypto = async (currentPage: number, pageSize: number) => {
    try {
        const response = await fetch("https://api.binance.com/api/v3/ticker/24hr")
        const data = await response.json()

        const top10Currencies = data.filter((item: CryptoData) => item.symbol.includes("USDT")).slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize)

        return top10Currencies
    } catch (error) {
        console.error(error)
    }
}