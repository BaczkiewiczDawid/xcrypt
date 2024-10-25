import {ApexOptions} from "apexcharts";
import Chart from "react-apexcharts";

type ChartProps = {
    chartData: {
        data: {
            x: number,
            y: number[]
        }[]
        group?: string
    }[]
    title: string
    height?: number
    showToolbar?: boolean
}

export const CandlestickChart = ({chartData, title, height = 350, showToolbar = false}: ChartProps) => {
    const options: ApexOptions = {
        chart: {
            type: 'candlestick',
            height: height,
            toolbar: {
                show: showToolbar,
            }
        },
        title: {
            text: title,
            align: 'left',
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div>
            <Chart options={options} series={chartData} type="candlestick" height={350}/>
        </div>
    );
}