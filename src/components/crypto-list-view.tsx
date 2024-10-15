"use client"

import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Cell} from "@/components/table/cell";
import {dataFormatter} from "@/helpers/data-formatter";
import {useEffect, useState} from "react";

export const CryptoListView = () => {
  const dummyData = [
    {
      id: 1,
      currency: "BTC",
      price: "67 432",
      change: "5"
    },
    {
      id: 2,
      currency: "BTC",
      price: "67 432",
      change: "5"
    },
    {
      id: 3,
      currency: "BTC",
      price: "67 432",
      change: "5"
    }
  ]

  const [top10CryptoData, setTop10CryptoData] = useState([])

  const getCryptoData = async () => {
    try {
      const response = await fetch("https://api.binance.com/api/v3/ticker/24hr")
      const data = await response.json()

      const top10Currencies = data.filter((item) => item.symbol.includes("USDT")).slice(0, 10)

      return top10Currencies
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData()
      setTop10CryptoData(data)
    }

    fetchData()
  }, []);

  console.log(top10CryptoData)

  return (
    <div>
      <h1 className={"font-bold"}>Explore top currencies</h1>
      <div className={"mt-4"}>
        <Table>
          <TableHeader>
            <TableRow className={"hover:bg-transparent"}>
              <TableHead className={"text-black"}>#</TableHead>
              <TableHead className={"text-black"}>Currency</TableHead>
              <TableHead className={"text-black"}>Price</TableHead>
              <TableHead className={"text-black"}>Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {top10CryptoData.map((data, index) => {
              return (
                <TableRow key={index} className={"hover:bg-gray-100"}>
                  <Cell>{index + 1}</Cell>
                  <Cell>{data.symbol.replace("USDT", "")}</Cell>
                  <Cell>{dataFormatter(data.askPrice, "money")}</Cell>
                  <Cell>{dataFormatter(data.priceChangePercent, "percent")}</Cell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}