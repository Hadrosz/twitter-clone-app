"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { InputValidationRules, SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

type Inputs = {
  name: string;
  username: string;
  email: string;
  password: string;
  verified: boolean;
};

export default function Page() {
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState<boolean | undefined>();
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!passwordMatch) return;

    const { name, username, email, password, verified } = data;
    const res = await fetch("http://localhost:3000/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
        verified: verified,
      }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      const error = await res.json();
      toast.error(error.message, { duration: 5000 });
    }
  };

  const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == password) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <main className="flex items-center flex-col justify-center border-x-[1px]  border-x-slate-200">
      <form
        className="w-96 m-auto border-y-gray-900"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl mb-8 text-center font-bold">Sign Up</h1>

        <div className="flex flex-col gap-3">
          <div className="w-full">
            <input
              {...register("name", {
                required: { value: true, message: "Fullname is required" },
              })}
              className="bg-gray-100 px-4 py-3 rounded-md placeholder:text-sm w-full"
              placeholder="Fullname"
            />
            {errors.name?.type === "required" && (
              <span className="text-sm text-red-600">Fullname is required</span>
            )}
          </div>

          <div className="w-full">
            <input
              {...register("username", {
                required: { value: true, message: "Username is required" },
              })}
              className="bg-gray-100 px-4 py-3 rounded-md placeholder:text-sm w-full"
              placeholder="Username"
            />
            {errors.username && (
              <span className="text-sm text-red-600">
                {errors.username.message}
              </span>
            )}
          </div>

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
              <span className="text-sm text-red-600">
                {errors.email.message}
              </span>
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
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="text-sm text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <input
              onChange={(e) => validatePassword(e)}
              className="bg-gray-100 px-4 py-3 rounded-md placeholder:text-sm w-full"
              placeholder="Confirm Password"
              type="password"
            />
            {passwordMatch == false ? (
              <span className="text-sm text-red-600">
                password do not match
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="w-full flex gap-3 items-center">
            <span className="text-sm ">Do you want premium account?</span>
            <input
              className="accent-black"
              type="checkbox"
              {...register("verified")}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 rounded-full my-2 px-8 py-1 text-white bg-black font-bold disabled:bg-white disabled:outline disabled:outline-black disabled:outline-2 disabled:text-black self-end transition-all transition-1000"
        >
          Enviar
        </button>
      </form>
      <Toaster position="bottom-right" richColors />;
    </main>
  );
}
