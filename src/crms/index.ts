import { PrismaClient as PrismaClientDas } from "@ero-software/prisma-das-client";

const prismaDas = new PrismaClientDas();

const dbMap: Record<string, PrismaClientDas> = {
  "09c23ceb-5f24-4604-8e07-a09d3d352d38": prismaDas,
};

export function getPrisma(id: string) {
  if(!dbMap[id]) throw new Error(`No Prisma Client found for ${id}`);
  return dbMap[id];
}
