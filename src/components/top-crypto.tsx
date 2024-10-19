"use client"

import {Props} from "next/script";
import {useEffect, useState} from "react";
import {getData} from "@/helpers/getData";
import {dataFormatter} from "@/helpers/data-formatter";

type Props = {
  type: "win" | "loss"
}

export const TopCrypto = ({type}: Props) => {
  const [topCryptoData, setTopCryptoData] = useState([])

  const options = {
    type: type,
    quantity: 3,
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("/api/top-crypto", options)

      setTopCryptoData(data.data)
    }

    fetchData()
  }, [type])

  console.log(topCryptoData)

  return (
    <div className={`rounded-md ${type === "win" ? "bg-green-400" : "bg-red-400"}`}>
      <div className={"px-4 py-2"}>
        <h2>{type === "win" ? "Top winners" : "Top losers"}</h2>
        {topCryptoData?.map((data, index) => {
          return (
            <div className={"flex justify-between"} key={index}>
              <p>{data.symbol.split("USDT")[0]}</p>
              <div className={"flex"}>
                <p className={"px-4"}>{dataFormatter(data.lastPrice, "money")}</p>
                <p>{dataFormatter(data.priceChangePercent, "percent")}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}