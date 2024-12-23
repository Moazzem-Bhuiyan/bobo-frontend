"use client";

import LearningAreaSectionTwo from "@/components/Form/LearningAreaSection/LearningAreaSectionTwo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Dialog, Popover } from "@headlessui/react";
import axios from "axios";
import { Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CycleForm = () => {
  const t = useTranslations("cycleOne");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/generateFeedback", {
        feedbackData: data,
      });

      const { comment } = response.data; // comment is already a string
      setResult({ feedback: comment }); // Wrap it in an object with a feedback key
      console.log("Submitted data:", comment);
    } catch (error) {
      console.log("Error generating feedback:", error);
      setResult({
        feedback:
          error.response?.data?.error ||
          "Error generating feedback. Please try again.",
      });
    } finally {
      reset();
      setIsLoading(false);
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
            <option value="Caring">{t("Caring")}</option>
              <option value="Encouraging">{t("Encouraging")}</option>
              <option value="Enthusiastic">{t("Enthusiastic")}</option>
              <option value="Rigorous">{t("Rigorous")}</option>
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
      <LearningAreaSectionTwo
        register={register}
        setValue={setValue}
      ></LearningAreaSectionTwo>

      {/* Submit Button */}
      <div className="text-primary-black lg:mx-auto lg:w-[70%] bg-opacity-70 p-5 rounded-lg">
        <Button
          type="submit"
          className="w-full mb-20 bg-purple-950"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="spinner-border animate-spin w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full"></div>
          ) : (
            t("Generate Comment")
          )}
        </Button>
      </div>

      {/* Modal */}
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
              <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
                {result?.feedback ? (
                  <p className="break-words">{result.feedback}</p>
                ) : (
                  <p>No feedback available. Please try again.</p>
                )}
                {/* Copy Button */}
                {result?.feedback && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(result.feedback);
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your comment has been copied.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }}
                    className="ml-3 px-3 py-1 rounded"
                  >
                    <Copy />
                  </button>
                )}
              </div>
            </div>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-purple-950"
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
