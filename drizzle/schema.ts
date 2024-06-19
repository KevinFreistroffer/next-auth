import { integer, pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";
import { type InferModel } from "drizzle-orm";

/** creates a table with columns. and i think a validation function */
export const users = pgTable("users", {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(), // how to unique()?
    password: text('password').notNull(),
}, (users) => {
    return {
        uniqueIdx: uniqueIndex('unique_idx').on(users.email)
    }
});

export const sessions = pgTable('sessions', {
    id: serial('id').primaryKey(),
    userId: integer('userId').references(() => users.id).notNull(),
    expiresAt: timestamp('expires_at').notNull()
});


export type NewUser = InferModel<typeof users>;
export type NewSession = InferModel<typeof sessions>;