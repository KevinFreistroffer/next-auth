"use server";

import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema";
import { SignupFormSchema } from "./auth/definitions";
import bcrypt from "bcrypt";

export async function signup(state: any, formData: FormData) {
  console.log("signup action state=", state);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const validationResult = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResult.success) {
    // console.log("Valid form data", result.data);
    console.log(validationResult.error);
    console.log(validationResult.error.flatten());
    return {
      errors: validationResult.error.flatten().fieldErrors,
    };
  } else {
    const { name, email, password } = validationResult.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
      })
      .returning({ id: users.id });
    console.log("INSERT user data=", data);

    const user = data[0];
    console.log("INSERT user=", user);
    // Session
  }
}
