import {dataFormatter, Format} from "@/helpers/data-formatter";

type Props = {
    label: string
    value: string | number
    type: Format
}

export const StatisticsTableItem = ({label, value, type}: Props) => {
    return (
        <div className={"flex items-center justify-between rounded-lg bg-white p-4 shadow-md"}>
            <h2 className={"text-md font-bold"}>{label}</h2>
            <p className={"text-sm"}>{dataFormatter(value, type)}</p>
        </div>
    )
}