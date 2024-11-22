import {dataFormatter} from "@/helpers/data-formatter";
import {StatisticsTableItem} from "@/components/table/statistics-table-item";

type Interval = "1m" | "5m" | "15m" | "30m" | "1h" | "4h" | "1d" | "1w"

type Props = {
    data: any[]
    interval: Interval
}

function parseInterval(interval: Interval) {
    const match = interval.match(/^(\d+)([mhdw])$/);
    if (!match) {
        throw new Error(`Invalid interval format: ${interval}`);
    }

    const value = parseInt(match[1], 10);
    const unit = match[2];

    const unitToMinutes: Record<typeof unit, number> = {
        m: 1,
        h: 60,
        d: 1440,
        w: 10080,
    };

    return value * unitToMinutes[unit];
}

export const StatisticsTable = ({data, interval}: Props) => {
    if (!data) return

    const minutesInDay = 24 * 60

    const intervalAsMinute = parseInterval(interval)

    const minutesFromDayBeggining = new Date().getHours() * 60 + new Date().getMinutes()

    const intervalsCount =
        minutesFromDayBeggining / intervalAsMinute

    const intervalsCountNumber = Math.ceil(intervalsCount)

    const intervalData = data.slice(data.length - intervalsCountNumber, data.length)

    const volumesForAllIntervals = intervalData.map((data) => Number(data[5]))

    const volume = Number(data[data.length - 1][7])

    console.log(intervalData)


    return (
        <div className={"mt-4 grid grid-cols-1 gap-4"}>
            <StatisticsTableItem label={"Volume"} value={volume} type={"money"}/>
            <div className={"flex items-center justify-between rounded-lg bg-white p-4 shadow-md"}>
                <h2 className={"text-md font-bold"}>Average volume (30d)</h2>
                <p className={"text-sm"}>123213</p>
            </div>
            <div className={"flex items-center justify-between rounded-lg bg-white p-4 shadow-md"}>
                <h2 className={"text-md font-bold"}>Trading volume 24h</h2>
                <p className={"text-sm"}>3123213</p>
            </div>
            <div className={"flex items-center justify-between rounded-lg bg-white p-4 shadow-md"}>
                <h2 className={"text-md font-bold"}>Market capitalization</h2>
                <p className={"text-sm"}>3232</p>
            </div>
        </div>
    )
}