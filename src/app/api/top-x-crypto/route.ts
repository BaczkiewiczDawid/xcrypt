import {NextRequest, NextResponse} from "next/server";
import {topXCrypto} from "@/app/api/interfaces/top-x-crypto";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams

    const currentPage = searchParams.get("currentPage")
    const pageSize = searchParams.get("pageSize")

    const data = await topXCrypto(Number(currentPage), Number(pageSize))

    return NextResponse.json({data})
  } catch (err) {
    NextResponse.json({err})
  }
}