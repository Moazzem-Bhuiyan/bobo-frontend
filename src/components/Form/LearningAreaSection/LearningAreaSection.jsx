import CheckboxGroup from "@/components/CheckBox";


const LearningAreasSection = ({ register, setValue }) => {
  return (
    <div className="text-primary-black lg:mx-auto lg:w-[70%] bg-opacity-70 p-5 rounded-lg">
      <div className="mt-6 bg-sky-50 rounded-md border-l-2 border-black p-10">
        <h2 className="text-lg font-semibold text-center">Learning Areas</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <CheckboxGroup
            title="Mathematical Tools"
            options={[
              "Comparing Quantities",
              "Discovery of Numbers",
              "Recognizing Shapes",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematicalTools"
            bgColor="#EBEDFE"
          />
          <CheckboxGroup
            title="Oral Language"
            options={[
              "Discovering Words",
              "Expressing Clearly",
              "Understanding Instructions",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.oralLanguage"
            bgColor="#C0E7FE"
          />
          <CheckboxGroup
            title="Mathematical Tools"
            options={[
              "Comparing Quantities",
              "Discovery of Numbers",
              "Recognizing Shapes",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematicalTools"
            bgColor="#BDFCC9"
          />
          <CheckboxGroup
            title="Oral Language"
            options={[
              "Discovering Words",
              "Expressing Clearly",
              "Understanding Instructions",
            ]}
            register={register}
            setValue={setValue}
            bgColor="#EBEDFE"
            groupKey="learningAreas.oralLanguage"
          />

          <CheckboxGroup
            title="Mathematical Tools"
            options={[
              "Comparing Quantities",
              "Discovery of Numbers",
              "Recognizing Shapes",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematicalTools"
            bgColor="#C0E7FE"
          />
          <CheckboxGroup
            title="Oral Language"
            options={[
              "Discovering Words",
              "Expressing Clearly",
              "Understanding Instructions",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.oralLanguage"
            bgColor="#BDFCC9"
          />
        </div>

        <div className="grid grid-cols-2 gap-10 mt-20">
          <CheckboxGroup
            title="Mathematical Tools"
            options={[
              "Comparing Quantities",
              "Discovery of Numbers",
              "Recognizing Shapes",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematicalTools"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            title="Oral Language"
            options={[
              "Discovering Words",
              "Expressing Clearly",
              "Understanding Instructions",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.oralLanguage"
            bgColor="#FFB6C1"
          />
          <CheckboxGroup
            title="Mathematical Tools"
            options={[
              "Comparing Quantities",
              "Discovery of Numbers",
              "Recognizing Shapes",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematicalTools"
            bgColor="#FFB84D99"
          />
          <CheckboxGroup
            title="Mathematical Tools"
            options={[
              "Comparing Quantities",
              "Discovery of Numbers",
              "Recognizing Shapes",
            ]}
            register={register}
            setValue={setValue}
            groupKey="learningAreas.mathematicalTools"
            bgColor="#FFB6C1"
          />
        </div>
      </div>

      {/* Behavior Section */}
      <div className="grid grid-cols-3 gap-10 bg-orange-50 mt-20 p-10">
        <CheckboxGroup
          title="Mathematical Tools"
          options={[
            "Comparing Quantities",
            "Discovery of Numbers",
            "Recognizing Shapes",
          ]}
          register={register}
          setValue={setValue}
          groupKey="learningAreas.mathematicalTools"
        />
        <CheckboxGroup
          title="Oral Language"
          options={[
            "Discovering Words",
            "Expressing Clearly",
            "Understanding Instructions",
          ]}
          register={register}
          setValue={setValue}
          groupKey="learningAreas.oralLanguage"
        />
        <CheckboxGroup
          title="Mathematical Tools"
          options={[
            "Comparing Quantities",
            "Discovery of Numbers",
            "Recognizing Shapes",
          ]}
          register={register}
          setValue={setValue}
          groupKey="learningAreas.mathematicalTools"
        />
      </div>

      {/* Improvement Section */}
      <div className="grid grid-cols-3 gap-10 bg-green-50 mt-20 p-10">
        <CheckboxGroup
          title="Mathematical Tools"
          options={[
            "Comparing Quantities",
            "Discovery of Numbers",
            "Recognizing Shapes",
          ]}
          register={register}
          setValue={setValue}
          groupKey="learningAreas.mathematicalTools"
        />
        <CheckboxGroup
          title="Oral Language"
          options={[
            "Discovering Words",
            "Expressing Clearly",
            "Understanding Instructions",
          ]}
          register={register}
          setValue={setValue}
          groupKey="learningAreas.oralLanguage"
        />
        <CheckboxGroup
          title="Mathematical Tools"
          options={[
            "Comparing Quantities",
            "Discovery of Numbers",
            "Recognizing Shapes",
          ]}
          register={register}
          setValue={setValue}
          groupKey="learningAreas.mathematicalTools"
        />
      </div>
    </div>
  );
};

export default LearningAreasSection;
