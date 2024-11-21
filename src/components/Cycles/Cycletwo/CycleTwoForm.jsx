"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import LearningAreaSectionTwo from "@/components/Form/LearningAreaSection/LearningAreaSectionTwo";
import { useState } from "react";
import { useTranslations } from "next-intl";

const CycleTwoForm = () => {
  const t = useTranslations("cycleOne");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [result, setResult] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    setResult(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-3xl mt-10 font-bold">
        {t("Personalized Student Feedback Generation Process")}
        </h1>

        <div className="text-primary-black lg:mx-auto lg:w-[45%] bg-white bg-opacity-70 p-5 rounded-lg">
          {/* Input Field */}
          <div className="mt-8 grid w-full items-center gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="name" className="font-semibold">
                Student Name
              </Label>
            </div>
            <div className="relative">
              <Input
                id="name"
                placeholder="Name"
                className="border-black bg-transparent px-4 py-5"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          {/* Dropdown for Tone of Voice */}
          <div className="mt-8 grid w-full items-center gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="toneOfVoice" className="font-semibold">
                Select Tone Of Voice
              </Label>
            </div>
            <div className="relative">
              <select
                id="toneOfVoice"
                className="w-full border rounded-md  border-black bg-transparent px-4 py-3"
                {...register("toneOfVoice", {
                  required: "Tone of Voice is required",
                })}
              >
                <option value=""></option>
                <option value="A">Grade A</option>
                <option value="B">Grade B</option>
                <option value="C">Grade C</option>
              </select>
            </div>
            {errors.toneOfVoice && (
              <span className="text-red-500">{errors.toneOfVoice.message}</span>
            )}
          </div>

          <div className="mt-8 grid w-full items-center gap-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="gender" className="font-semibold">
                Select Gender
              </Label>
            </div>
            <div className="relative">
              <select
                id="gender"
                className="w-full border rounded-md border-black bg-transparent px-4 py-3"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value=""></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {errors.gender && (
              <span className="text-red-500">{errors.gender.message}</span>
            )}
          </div>
        </div>

        <h1 className=" text-center text-3xl font-bold my-4 ">
          {t("PathWay To Growth")}
        </h1>
        <hr />

        <LearningAreaSectionTwo
          register={register}
          setValue={setValue}
        ></LearningAreaSectionTwo>

        {/* Submit Button */}
        <div className="text-primary-black lg:mx-auto lg:w-[70%] bg-opacity-70 p-5 rounded-lg">
          <Button type="submit" className="w-full mb-20 bg-purple-950">
            Generate Comment
          </Button>
        </div>
      </form>

      {/* show Comment */}

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-medium">Generated Comment:</h3>
          <pre className="mt-4 p-2 bg-gray-200 rounded-md">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
};

export default CycleTwoForm;
