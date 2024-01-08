import { PrismaClient as PrismaClientExample } from "./prisma/generated/client_example";

// Assuming PrismaClientExample is correctly imported from the generated client
console.log("PrismaClientExample", PrismaClientExample);
const prismExample = new PrismaClientExample({
  log: ["query", "info", "warn", "error"],
});
console.log("prismExample", prismExample);
prismExample.notes.findFirst().then((res) => {
  console.log("res", res);
});

// Define a type for dbMap
interface DbMap {
  [companyId: string]: PrismaClientExample;
}

const dbMap: DbMap = {
  "09c23ceb-5f24-4604-8e07-a09d3d352d38": prismExample,
};

export function getDb(companyId: string): PrismaClientExample | null {
  const db = dbMap[companyId];
  if (!db) {
    return null;
  }
  return db;
}
