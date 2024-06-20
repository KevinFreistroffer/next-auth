import "server-only";
import { db } from "@/drizzle/db";
import { eq } from "drizzle-orm";
import { cache } from "react";
import { users } from "@/drizzle/schema";
import { verifySession } from "@/app/auth/stateless-session";

export const getUser = cache(async () => {
  console.log("dal? getUser()");
  const session = await verifySession();
  if (!session) return null;

  try {
    const data = await db
      .select({ id: users.id, name: users.name, email: users.email })
      .from(users)
      .where(eq(users.id, session.userId));

    const user = data[0];

    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  }
});
