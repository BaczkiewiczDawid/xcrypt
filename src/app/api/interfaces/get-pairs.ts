export const getPairs = async () => {
    try {
        const response = await fetch("https://api.binance.com/api/v3/ticker/24hr")

        const data = await response.json()

        const pairs = data.map((pair: { symbol: string; }) => pair.symbol)

        const sortedPairs = pairs.sort((a: string, b: string) => {
            const aIncludesUSDT = a.includes("USDT")
            const bIncludesUSDT = b.includes("USDT")

            if (aIncludesUSDT && !bIncludesUSDT) return -1
            if (!aIncludesUSDT && bIncludesUSDT) return 1

            return 0
        })

        return sortedPairs
    } catch {

    }
}