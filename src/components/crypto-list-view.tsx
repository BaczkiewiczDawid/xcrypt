"use client"

import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Cell} from "@/components/table/cell";
import {dataFormatter} from "@/helpers/data-formatter";
import {useEffect, useState} from "react";
import {
  Pagination,
  PaginationContent, PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import {getData} from "@/helpers/getData";
import {TableLoader} from "@/components/loaders/table-loader";
import {CryptoData} from "@/types/crypto-data";

export const CryptoListView = () => {
  const [top10CryptoData, setTop10CryptoData] = useState<CryptoData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const options = {
    currentPage: currentPage,
    pageSize: pageSize,
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("/api/top-x-crypto", options)

      setTop10CryptoData(data.data)
    }

    fetchData()
  }, [currentPage]);

  const changeCurrentPage = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1)
    } else if (direction === "prev") {
      if (currentPage === 1) return

      setCurrentPage((prev) => prev - 1)
    } else {
      return
    }
  }

  return (
    <div>
      <h1 className={"font-bold"}>Explore top currencies</h1>
      <div className={"mt-4"}>
        {top10CryptoData.length === 0 ? <TableLoader/> :
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
                    <Cell>{(currentPage - 1) * pageSize + index + 1}</Cell>
                    <Cell>{data.symbol.replace("USDT", "")}</Cell>
                    <Cell>{dataFormatter(data.lastPrice, "money")}</Cell>
                    <Cell>{dataFormatter(data.priceChangePercent, "percent")}</Cell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>}


        <div className={"mt-4"}>
          <Pagination className={"flex justify-end"}>
            <PaginationContent>
              <PaginationItem className={"cursor-pointer"} onClick={() => changeCurrentPage("prev")}>
                <PaginationPrevious className={"hover:bg-transparent hover:text-foreground"}/>
              </PaginationItem>
              <div className={"hidden"}>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis/>
                </PaginationItem>
              </div>
              <PaginationItem className={"cursor-pointer"} onClick={() => changeCurrentPage("next")}>
                <PaginationNext className={"hover:bg-transparent hover:text-foreground"}/>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}