// тут создаем новые таблицы БД и связи между ними
// потом команда npx drizzle-kit push

import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const sportsTable = pgTable("sports", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const eventsTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 500 }).notNull(),
});
