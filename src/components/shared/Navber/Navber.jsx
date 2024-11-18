"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useState } from "react";


const Navber = () => {

    const [language, setLanguage] = useState("en");

    const setEnglish = () => setLanguage("en");
    const setBangla = () => setLanguage("fn");
    return (
        <div className=" flex justify-between w-[80%] mx-auto shadow-md px-4 p-1 rounded-2xl bg-white bg-opacity-60 ">

            <Avatar className=" flex gap-x-5 justify-center items-center">
                <AvatarImage className=" w-10 rounded-full" src="https://github.com/shadcn.png" />
                <h1 className=" text-2xl">Teacher Comment Hub</h1>

                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex gap-2  p-1 px-2 rounded-2xl bg-white">
                <button
                    onClick={setEnglish}
                    className={`px-4 py-2 rounded transition ${language === "en" ? "bg-black text-white" : "bg-gray-200 text-black"
                        }`}
                >
                    EN
                </button>
                <button
                    onClick={setBangla}
                    className={`px-4 py-2 rounded transition ${language === "fn" ? "bg-black text-white" : "bg-gray-200 text-black"
                        }`}
                >
                    FN
                </button>
            </div>


        </div>
    )
}

export default Navber
