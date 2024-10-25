import {NextRequest, NextResponse} from "next/server";
import {getSingleCrypto} from "@/app/api/interfaces/get-single-crypto";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams

        const pair = searchParams.get("pair")
        const interval = searchParams.get("interval")

        if (!pair || !interval) {
            return NextResponse.json({error: "No required options provided"})
        }

        const data = await getSingleCrypto(pair, interval)

        return NextResponse.json({data})
    } catch {
        return NextResponse.json({error: "Failed to fetch data"})
    }
}