import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  varchar,
  uuid,
  text,
  json,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().unique().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
});

export const images = pgTable("images", {
  id: uuid("id").defaultRandom().unique().primaryKey(),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  customId: varchar({ length: 255 }),
  fileHash: varchar({ length: 255 }).notNull(),
  key: varchar({ length: 255 }).notNull(),
  lastModified: integer("last_modified"),
  name: varchar({ length: 255 }).notNull(),
  serverData: json(),
  size: integer(),
  type: varchar({ length: 255 }).notNull(),
  ufsUrl: varchar({ length: 255 }).notNull(),
});

export const projectsRelations = relations(projects, ({ many }) => ({
  images: many(images),
}));

export const imagesRelations = relations(images, ({ one }) => ({
  project: one(projects, {
    fields: [images.projectId],
    references: [projects.id],
  }),
}));
