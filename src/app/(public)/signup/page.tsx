"use client";

import React, { useActionState, useEffect, useState } from "react";
import { signup } from "@/app/actions";
import styles from "./styles.module.css";
import { SignUpFormState } from "../../auth/definitions";
import Errors from "@/app/components/Errors";

type Payload = any;

const Page: React.FC = () => {
  const [state, action, pending] = useActionState<SignUpFormState, Payload>(
    signup,
    undefined
  );

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
            {state?.errors?.name ? (
              <Errors errors={state?.errors.name} />
            ) : null}
          </div>
          <div className={`${styles["form-field"]}`}>
            <input
              className={`${styles["input"]} rounded`}
              type="email"
              placeholder="Email"
              name="email"
            />
            {state?.errors?.email ? (
              <Errors errors={state?.errors.email} />
            ) : null}
          </div>

          <div className={`${styles["form-field"]}`}>
            {" "}
            <input
              className={`${styles["input"]} rounded`}
              type="password"
              placeholder="Password"
              name="password"
            />
            {state?.errors?.password ? (
              <Errors errors={state?.errors.password} />
            ) : null}
          </div>

          <button
            disabled={pending}
            className={`${styles["submit-button"]} rounded p-3`}
            type="submit"
          >
            {pending ? "Sign you up..." : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
