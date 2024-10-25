"use client"

import {useEffect, useState} from "react";
import {CandlestickChart} from "@/components/charts/candlestick-chart";
import {getData} from "@/helpers/getData";

type ChartData = {
    data: {
        x: number;
        y: number[];
    }[];
}

export default function Analytics() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const options = {pair: "BTCUSDT", interval: "4h"};
            const data = await getData("/api/single-crypto", options);
            setData(data.data);
        };

        fetchData();
    }, []);

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
            <h1>Analytics</h1>
            {series && <CandlestickChart chartData={series} title={"BTC / USDT"}/>}
        </div>
    );
}