import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
// для вызова в db через . без импорта отдельных таблиц
import * as schema from "./schema";

export const db = drizzle(process.env.DATABASE_URL!, { schema });
