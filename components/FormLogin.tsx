"use client";

import { Inputs } from "@/libs/type";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

export default function FormLogIn() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(res);
    if (res?.ok) {
      toast.success("Login Success", { duration: 5000 });
      router.push("/");
    } else {
      toast.error(res?.error, { duration: 5000 });
    }
  };

  return (
    <form
      className="w-96 m-auto border-y-gray-900"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-4xl mb-8 text-center font-bold">Log In</h1>

      <div className="flex flex-col gap-3">
        <div className="w-full">
          <input
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="bg-gray-100 px-4 py-3 rounded-md placeholder:text-sm w-full"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="w-full">
          <input
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
            className="bg-gray-100 px-4 py-3 rounded-md placeholder:text-sm w-full"
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <span className="text-sm text-red-600">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 rounded-full my-2 px-8 py-1 text-white bg-black font-bold disabled:bg-white disabled:outline disabled:outline-black disabled:outline-2 disabled:text-black self-end transition-all transition-1000"
      >
        Enviar
      </button>
    </form>
  );
}
