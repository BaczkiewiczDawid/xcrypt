"use client"

import {Props} from "next/script";
import {useEffect, useState} from "react";
import {getData} from "@/helpers/getData";
import {dataFormatter} from "@/helpers/data-formatter";
import {ModalLoader} from "@/components/loaders/modal-loader";

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
    <div
      className={`rounded-md ${type === "win" ? "bg-gradient-to-br from-green-400 to-green-500" : "bg-gradient-to-br from-red-400 to-red-500"}`}>
      {topCryptoData.length === 0 ? <ModalLoader/> :
        <div className={"px-4 py-2"}>
          <h2 className={"text-white font-medium"}>{type === "win" ? "Top winners" : "Top losers"}</h2>
          <div className={"mt-2"}>
            {topCryptoData?.map((data, index) => {
              return (
                <div className={"flex justify-between"} key={index}>
                  <p className={"text-white text-sm"}>{data.symbol.split("USDT")[0]}</p>
                  <div className={"flex text-white text-sm"}>
                    <p className={"px-4 text-white text-sm"}>{dataFormatter(data.lastPrice, "money")}</p>
                    <p>{dataFormatter(data.priceChangePercent, "percent")}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>}
    </div>
  )
}