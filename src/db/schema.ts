// тут создаем новые таблицы БД и связи между ними
// потом команда npx drizzle-kit push

// 1. Создаем таблицу/ делаем изменения
// 2. Потом -> generate (создаться файл с миграциями в папке drizzle)
// 3. Внесение изменений в БД -> migrate

import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const sportsTable = pgTable("sports", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const eventsTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 100 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
});

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  image: text(),
  role: varchar({ length: 50 }).default("customer"),
});

export const todos = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  text: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
