"use client";
import LearningAreasSection from "@/components/Form/LearningAreaSection/LearningAreaSectionone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, Popover } from "@headlessui/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
const CycleForm = () => {
  const t = useTranslations("cycleOne");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const onSubmit = async (data) => {
    console.log("Submitted data:", data);

    try {
      const response = await axios.post("/api/generateFeedback", {
        feedbackData: data,
      });

      const { comment } = response.data;
      setResult(JSON.parse(comment));
      setIsModalOpen(true);
    } catch (error) {
      console.log("Error generating feedback:", error);
      setResult({
        feedback:
          error.response?.data?.error ||
          "Error generating feedback. Please try again.",
      });
      setIsModalOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-3xl font-bold mt-8">
        {t("Personalized Student Feedback Generation Process")}
      </h1>

      <div className="text-primary-black lg:mx-auto lg:w-[45%] bg-white bg-opacity-70 p-5 rounded-lg">
        {/* Student Name Input Field */}
        <div className="mt-8 grid w-full items-center gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="name" className="font-semibold">
              {t("Student Name")}
            </Label>
            <Popover className="relative">
              <Popover.Button className="text-blue-500 cursor-help">
                ?
              </Popover.Button>
              <Popover.Panel className="absolute z-10 bg-white p-4 rounded shadow-lg mt-2 w-48">
                Enter the full name of the student
              </Popover.Panel>
            </Popover>
          </div>
          <div className="relative">
            <Input
              id="name"
              placeholder={t("Name")}
              className="border-black bg-transparent px-4 py-5"
              {...register("name", { required: t("Name is required") })}
            />
          </div>
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        {/* Tone of Voice Dropdown */}
        <div className="mt-8 grid w-full items-center gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="toneOfVoice" className="font-semibold">
              {t("Select Tone Of Voice")}
            </Label>
            <Popover className="relative">
              <Popover.Button className="text-blue-500 cursor-help">
                ?
              </Popover.Button>
              <Popover.Panel className="absolute z-10 bg-white p-4 rounded shadow-lg mt-2 w-48">
                Choose the tone of voice preferred for communication
              </Popover.Panel>
            </Popover>
          </div>
          <div className="relative">
            <select
              id="toneOfVoice"
              className="w-full border rounded-md border-black bg-transparent px-4 py-3"
              {...register("toneOfVoice", {
                required: t("Tone of Voice is required"),
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

        {/* Gender Dropdown */}
        <div className="mt-8 grid w-full items-center gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="gender" className="font-semibold">
              {t("Select Gender")}
            </Label>
            <Popover className="relative">
              <Popover.Button className="text-blue-500 cursor-help">
                ?
              </Popover.Button>
              <Popover.Panel className="absolute z-10 bg-white p-4 rounded shadow-lg mt-2 w-48">
                Select the gender of the student
              </Popover.Panel>
            </Popover>
          </div>
          <div className="relative">
            <select
              id="gender"
              className="w-full border rounded-md border-black bg-transparent px-4 py-3"
              {...register("gender", { required: t("Gender is required") })}
            >
              <option value=""></option>
              <option value="Male">{t("Male")}</option>
              <option value="Female">{t("Female")}</option>
              <option value="Other">{t("Other")}</option>
            </select>
          </div>
          {errors.gender && (
            <span className="text-red-500">{errors.gender.message}</span>
          )}
        </div>
      </div>

      <h1 className="text-center text-3xl font-bold my-4">
        {t("PathWay To Growth")}
      </h1>
      <hr />

      <LearningAreasSection
        register={register}
        setValue={setValue}
      ></LearningAreasSection>

      {/* Submit Button */}
      <div className="text-primary-black lg:mx-auto lg:w-[70%] bg-opacity-70 p-5 rounded-lg">
        <Button type="submit" className="w-full mb-20 bg-purple-950">
          {t("Generate Comment")}
        </Button>
      </div>

      {/* Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
            <Dialog.Title className="text-lg font-bold">
              Generated Comment
            </Dialog.Title>
            <div className="mt-4">
              <pre className="bg-gray-100 p-3 rounded">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-purple-950 "
            >
              Close
            </Button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </form>
  );
};

export default CycleForm;
