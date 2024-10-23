import {NextRequest, NextResponse} from "next/server";
import {topCrypto} from "@/app/api/interfaces/top-crypto";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams

    const type = searchParams.get("type")
    const quantity = searchParams.get("quantity")

    const response = await topCrypto(type, Number(quantity))

    return NextResponse.json({data: response})
  } catch (err) {
    return NextResponse.json({error: err})
  }
}