"use client";

import React, { useActionState, useEffect, useState } from "react";
import { signup } from "@/app/actions";
import styles from "@/app/signup/styles.module.css";

type State = {
  errors: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
} | null;

type Payload = any;

const Page: React.FC = () => {
  const [state, action, pending] = useActionState<State, Payload>(signup, null);

  useEffect(() => {
    console.log("state=", state);
  }, [state]);
  return (
    <div
      className={`${styles["page"]} flex flex-col justify-center items-center`}
    >
      <div
        className={`${styles["form-container"]} rounded flex flex-col justify-center items-stretch px-24 py-16`}
      >
        <h2
          className={`${styles["h2"]} text-2xl text-white font-bold text-center`}
        >
          Create an account
        </h2>
        <h3 className="text-gray-300 mt-3 mb-6 text-center">
          Enter your information to get started
        </h3>
        <form className={`${styles["form"]} flex flex-col`} action={action}>
          <div className={`${styles["form-field"]}`}>
            <input
              className={`${styles["input"]} rounded`}
              type="name"
              placeholder="Name"
              name="name"
            />
            {state?.errors?.name && (
              <p className="text-red-400 mt-1 mb-4">{state.errors.name}</p>
            )}
          </div>
          <div className={`${styles["form-field"]}`}>
            <input
              className={`${styles["input"]} rounded`}
              type="email"
              placeholder="Email"
              name="email"
            />
            {state?.errors?.email && (
              <p className="text-red-400 mt-1 mb-4">{state.errors.email}</p>
            )}
          </div>

          <div className={`${styles["form-field"]}`}>
            {" "}
            <input
              className={`${styles["input"]} rounded`}
              type="password"
              placeholder="Password"
              name="password"
            />
            {state?.errors?.password && (
              <p className="text-red-400 mt-1 mb-6">{state.errors.password}</p>
            )}
          </div>

          <button
            disabled={pending}
            className={`${styles["submit-button"]} rounded p-3`}
            type="submit"
          >
           {pending ?  "Sign you up..." : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
