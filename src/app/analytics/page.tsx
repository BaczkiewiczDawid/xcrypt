"use client"

import {useEffect, useState} from "react";
import {CandlestickChart} from "@/components/charts/candlestick-chart";
import {getData} from "@/helpers/getData";
import {Combobox} from "@/components/combobox";
import {Bookmark} from "lucide-react";
import {Bookmarks} from "@/components/bookmarks";

type ChartData = {
    data: {
        x: number;
        y: number[];
    }[];
}

export default function Analytics() {
    const [data, setData] = useState([])
    const [selectedPair, setSelectedPair] = useState("BTCUSDT");
    const [pairsList, setPairsList] = useState([{
        label: 'BTC / USDT',
        value: 'BTCUSDT'
    },
        {
            label: 'ETH / USDT',
            value: 'ETHUSDT'
        },
        {
            label: 'BNB / USDT',
            value: 'BNBUSDT'
        }])

    useEffect(() => {
        const fetchData = async () => {
            const options = {pair: selectedPair, interval: "4h"};
            const data = await getData("/api/single-crypto", options);
            const pairsData = await getData("/api/pairs")

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
    }, [selectedPair]);

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
                <Combobox value={selectedPair} setValue={setSelectedPair} options={pairsList}/>
                <Bookmarks selectedPair={selectedPair}/>
            </div>
            <div className={"mt-12"}>
                {series.length > 0 &&
                    <CandlestickChart chartData={series} title={selectedPair}/>
                }
            </div>
        </div>
    );
}