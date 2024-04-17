import { NextResponse } from "next/server";
import { TOOL_LIST } from "@/constants/tool_en_test";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const tool = TOOL_LIST.find((item) => params.id === item.id.toString());

  return NextResponse.json(tool);
}