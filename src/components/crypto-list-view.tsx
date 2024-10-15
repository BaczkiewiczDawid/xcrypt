import {Table, TableBody, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Cell} from "@/components/table/cell";
import {dataFormatter} from "@/helpers/data-formatter";

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

  return (
    <div>
      <h1 className={"font-medium"}>Explore top currencies</h1>
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
            {dummyData.map((data) => {
              return (
                <TableRow key={data.id} className={"hover:bg-gray-100"}>
                  <Cell>{data.id}</Cell>
                  <Cell>{data.currency}</Cell>
                  <Cell>{dataFormatter(data.price, "money")}</Cell>
                  <Cell>{dataFormatter(data.change, "percent")}</Cell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}