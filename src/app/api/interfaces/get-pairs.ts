export const getPairs = async (options: any) => {
    try {
        const bookmarks = JSON.parse(options.get("bookmarks"))

        const response = await fetch("https://api.binance.com/api/v3/ticker/24hr")

        const data = await response.json()

        const pairs = data.map((pair: { symbol: string; }) => pair.symbol)

        const sortedPairs = pairs.sort((a: string, b: string) => {
            const aInBookmarks = bookmarks.includes(a);
            const bInBookmarks = bookmarks.includes(b);

            const aIncludesUSDT = a.includes("USDT")
            const bIncludesUSDT = b.includes("USDT")

            if (aInBookmarks && !bInBookmarks) return -1;
            if (!aInBookmarks && bInBookmarks) return 1;

            if (aIncludesUSDT && !bIncludesUSDT) return -1
            if (!aIncludesUSDT && bIncludesUSDT) return 1

            return 0
        })

        return sortedPairs.slice(0, 100)
    } catch {
        return {
            error: "Failed to fetch data"
        }
    }
}