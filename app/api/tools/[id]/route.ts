import { NextApiRequest, NextApiResponse } from "next";
import { TOOL_LIST } from "@/constants/tool_en_test";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const tool = TOOL_LIST.find((item) => id === item.id.toString());

  if (!tool) {
    // Gérer le cas où aucun outil ne correspond à l'ID fourni
    return res.status(404).json({ message: "Outil non trouvé" });
  }

  return res.status(200).json(tool);
}
