export const getSingleCrypto = async (pair: string, interval: string) => {
    const BASE_URL = 'https://api.binance.com/api/v3/klines';

    const getTimeStamp = (monthsAgo: number) => {
        const date = new Date();
        date.setMonth(date.getMonth() - monthsAgo);
        return date.getTime();
    };

    try {
        const endTime = new Date().getTime();
        const startTime = getTimeStamp(3);

        const params = new URLSearchParams({
            symbol: pair,
            interval: interval,
            startTime: startTime.toString(),
            endTime: endTime.toString(),
            limit: '1000',
        });

        const response = await fetch(`${BASE_URL}?${params}`);

        const data = await response.json();

        return data
    } catch (err) {
        return err
    }
}