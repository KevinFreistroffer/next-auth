"use server";

import { UserSchema } from "./_lib/definitions";

export async function signup(state: any, formData: FormData) {
  console.log("signup action state=", state);
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const result = UserSchema.safeParse({ name, email, password });

  if (!result.success) {
    // console.log("Valid form data", result.data);
    console.log(result.error);
    console.log(result.error.flatten());
    return {
      errors: result.error.flatten().fieldErrors,
    };
  } else {
    // console.error("Invalid form data", result.error);
    return null;
  }
}
