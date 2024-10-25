"use client"

import {useEffect, useState} from "react";
import {CandlestickChart} from "@/components/charts/candlestick-chart";
import {getData} from "@/helpers/getData";
import {Combobox} from "@/components/combobox";

type ChartData = {
    data: {
        x: number;
        y: number[];
    }[];
}

export default function Analytics() {
    const [data, setData] = useState([])
    const [selectedPair, setSelectedPair] = useState("BTCUSDT");

    useEffect(() => {
        const fetchData = async () => {
            const options = {pair: selectedPair, interval: "4h"};
            const data = await getData("/api/single-crypto", options);
            setData(data.data);
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

    const pairsList = [
        {
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
        }
    ]

    return (
        <div>
            <Combobox value={selectedPair} setValue={setSelectedPair} options={pairsList}/>
            {series.length > 0 &&
                <CandlestickChart chartData={series} title={selectedPair}/>
            }
        </div>
    );
}