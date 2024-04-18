import { NextResponse } from "next/server";
import toolsData from '../../../../constants/tool_en_test.json';

export async function GET(request:Request, context:any) {
  const { params } = context;
  const tool = toolsData.find((item) => params.id === item.id.toString());

  if (!tool) {
    // Gérer le cas où aucun outil ne correspond à l'ID fourni
    return new Response(null, {
      status: 404,
      statusText: "Outil non trouvé",
    });
  }

  return NextResponse.json(tool);
}
