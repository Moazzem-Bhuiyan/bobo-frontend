"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import EyeIconInverse from "@/components/EyeIcon/EyeIcon";
import { useState } from "react";
export default function LoginForm() {

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-primary-black lg:mx-auto lg:w-[35%] bg-white bg-opacity-70 p-5 rounded-lg "
        >
            <h1 className=" text-center text-2xl font-bold">Sign In </h1>
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name" className="font-semibold">
                    Email
                </Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="border-black bg-transparent px-4 py-5"
                    {...register("email", {
                        required: "Email is required",
                        validate: (value) => {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailRegex.test(value)) {
                                return "Must be a valid email";
                            }
                            return true;
                        },
                    })}
                />
                {errors.email && (
                    <span className="shake-hr text-red-500">{errors.email.message}</span>
                )}
            </div>
            <div className="mt-8 grid w-full items-center gap-1.5">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="font-semibold">
                        Password
                    </Label>
                </div>
                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        className="border-black bg-transparent px-4 py-5"
                        {...register("password", { required: true })}
                    />
                    <EyeIconInverse
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                    />
                </div>

                {errors.password && (
                    <span className={"shake-hr text-red-500"}>Password is required</span>
                )}
            </div>

            <div className=" flex justify-between mt-10">
                <div className="flex items-center space-x-2">

                    <Checkbox />
                    <label
                        htmlFor="terms2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Remember me
                    </label>
                </div>
                <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary-black"
                >
                    Forgot Password?
                </Link>

            </div>
            <div className=" flex gap-10 justify-center items-center  ">

                <Button

                    type="submit"
                    className="mt-10 block h-[2.7rem] border "
                >
                    SIGN IN
                </Button>

                <Button
                    varient="default"
                    type="submit"
                    className="mt-10 block h-[2.7rem] border-1 border-2 border-black bg-transparent text-black hover:text-white "
                >
                    Continue As A Guest
                </Button>
            </div>


            <div className="mt-3 flex items-center justify-center gap-2">
                <p>Don&apos;t have an account?</p>
                <Link href="/register" className="font-medium text-primary-orange">
                    Register
                </Link>
            </div>
        </form>
    );
}