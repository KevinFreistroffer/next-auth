import "./config";
import { drizzle, DrizzleConfig } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users, NewUser } from "./schema";
import * as schema from "./schema";

export const db = drizzle(sql);

export const insertUser = async (user: Omit<NewUser, "id">) => {
  return db.insert(users).values(user).returning();
};
