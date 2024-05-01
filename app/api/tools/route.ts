import { NextResponse } from "next/server";
import { TOOL_LIST } from "@/constants/tool_data";

export async function GET(request:Request) {
  const tools = TOOL_LIST

  if (!tools) {
    // Gérer le cas où aucun outil ne correspond à l'ID fourni
    return new Response(null, {
      status: 404,
      statusText: "Outils non trouvé",
    });
  }

  return NextResponse.json(tools);
}
