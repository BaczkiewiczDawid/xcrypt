import {NextResponse} from "next/server";
import {getPairs} from "@/app/api/interfaces/get-pairs";

export async function GET() {
    try {
        const response = await getPairs()

        return NextResponse.json(response)
    } catch (err) {
        return NextResponse.json({error: "Failed to fetch data"})
    }
}