"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import LearningAreasSection from "@/components/Form/LearningAreaSection/LearningAreaSection";

const CycleTwoForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-2xl font-bold">
        Personalized Student Feedback Generation Process
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

      <LearningAreasSection  register={register} setValue={setValue}></LearningAreasSection>

      {/* Submit Button */}
      <Button type="submit" className="w-full mb-20">
        Generate Comment
      </Button>
    </form>
  );
};

export default CycleTwoForm;
