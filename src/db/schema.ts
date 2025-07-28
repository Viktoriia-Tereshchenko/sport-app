import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const sportsTable = pgTable("sports", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

// тут создаем новые таблицы БД
// таблицы и связи между ними
// потом команда npx drizzle-kit push

// бесплатная БД  supabase postgres
