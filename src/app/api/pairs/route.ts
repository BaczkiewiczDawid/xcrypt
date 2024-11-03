import {NextRequest, NextResponse} from "next/server";
import {getPairs} from "@/app/api/interfaces/get-pairs";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams

        const response = await getPairs(searchParams)

        return NextResponse.json(response)
    } catch (err) {
        return NextResponse.json({error: "Failed to fetch data"})
    }
}