import { NextResponse } from "next/server";
import { TOOL_LIST } from "@/constants/tool_en";

export async function GET() {
    return NextResponse.json({
        TOOL_LIST
    }
    )
}