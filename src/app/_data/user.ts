import "server-only";
import { db } from "@/drizzle/db";
import { verifySession } from "../auth/stateless-session";
import { users } from "@/drizzle/schema";
import { eq, getTableColumns } from "drizzle-orm";

// TODO what version of React supports cache();
// need to import it and wrap the function in cache()
export const getUser = async () => {
  console.log("_data getUser()");
  try {
    const session = await verifySession();

    const data = await db
      .select({ id: users.id, name: users.name, email: users.email })
      .from(users)
      .where(eq(users.id, session?.userId));

    console.log("getUser() without findMany & run() data=", data);

    const user = data[0];

    return user;
  } catch (error) {
    console.error("Failed to fetch user", error);
    return null;
  }
};
