"use client"

import {useEffect, useState} from "react";
import {CandlestickChart} from "@/components/charts/candlestick-chart";
import {getData} from "@/helpers/getData";
import {Combobox} from "@/components/combobox";
import {Bookmarks} from "@/components/bookmarks";
import {intervalsList} from "@/data/intervals";
import {StatisticsTable} from "@/app/analytics/components/statistics-table";

type ChartData = {
    data: {
        x: number;
        y: number[];
    }[];
}

export default function Analytics() {
    const [data, setData] = useState([])
    const [selectedPair, setSelectedPair] = useState("BTCUSDT");
    const [pairsList, setPairsList] = useState([])
    const [bookmarks, setBookmarks] = useState<string[]>([]);
    const [interval, setInterval] = useState("4h");

    useEffect(() => {
        const fetchData = async () => {
            const options = {pair: selectedPair, interval: interval};
            const pairsDataOptions = {bookmarks: JSON.stringify(bookmarks)}
            const data = await getData("/api/single-crypto", options);
            const pairsData = await getData("/api/pairs", pairsDataOptions)

            // TODO: dynamically load pairs list

            const formattedPairsData = pairsData.map((pair: string) => {
                return {
                    label: pair.includes("USDT") ? pair.split("USDT")[0] + " / USDT" : pair,
                    value: pair
                }
            })

            setData(data.data);
            setPairsList(formattedPairsData)
        };

        fetchData();
    }, [selectedPair, bookmarks, interval]);

    const [series, setSeries] = useState<ChartData[]>([]);

    useEffect(() => {
        setSeries([
            {
                data: data.map((el) => {
                    return {
                        x: new Date(el[0]).getTime(),
                        y: [parseFloat(el[1]), parseFloat(el[2]), parseFloat(el[3]), parseFloat(el[4])] // open, high, low, close jako y
                    };
                })
            }
        ]);
    }, [data]);

    return (
        <div>
            <div className={"flex items-center justify-between"}>
                <div className={"flex gap-x-4"}>
                    <Combobox value={selectedPair} setValue={setSelectedPair} options={pairsList}
                              bookmarks={bookmarks} searchPlaceholder={"Select pair..."}/>
                    <Combobox value={interval} setValue={setInterval} options={intervalsList}/>
                </div>
                <Bookmarks selectedPair={selectedPair} bookmarks={bookmarks} setBookmarks={setBookmarks}/>
            </div>
            <div className={"mt-12"}>
                {series.length > 0 &&
                    <CandlestickChart chartData={series} title={selectedPair}/>
                }
            </div>
            <div className={"mt-12"}>
                <h1 className={"text-xl font-bold"}>Key stats</h1>
                {data.length > 0 && <StatisticsTable data={data} interval={interval}/>}
            </div>
        </div>
    );
}