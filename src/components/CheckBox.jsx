"use client";

import { useState } from "react";

const CheckboxGroup = ({ title, options, register, groupKey, setValue, bgColor }) => {
  const [selectedOptions, setSelectedOptions] = useState(
    options.reduce((acc, option) => {
      acc[option] = null; // Default value is null
      return acc;
    }, {})
  );

  const handlePlus = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: true, // Set to true
    }));
    setValue(`${groupKey}.${option}`, true);
  };

  const handleMinus = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: false, // Set to false
    }));
    setValue(`${groupKey}.${option}`, false);
  };

  const handleReset = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: null, // Reset to null
    }));
    setValue(`${groupKey}.${option}`, null);
  };

  return (
    <div>
      <h3 className="font-medium mb-2 text-center">{title}</h3>

      <div
        className="flex flex-col space-y-2 p-4 rounded-3xl border"
        style={{
          backgroundColor: bgColor 
        }}
      >
        {options.map((option) => (
          <div key={option} className="p-2  rounded flex items-center justify-between"  >
            <div className="flex items-center">
              <span>{option}</span>
            </div>

            {/* Buttons for plus, minus, and reset */}
            <div className="flex space-x-2 items-center">
              <button
                type="button"
                className={`px-2 py-1 rounded ${
                  selectedOptions[option] === true ? "bg-green-500 text-white"  : "bg-white"
                } text-black`}
                onClick={() => handlePlus(option)}
              >
                +
              </button>
              <button
                type="button"
                className={`px-2 py-1 rounded ${
                  selectedOptions[option] === false ? "bg-red-500 text-white" : "bg-white"
                } text-black`}
                onClick={() => handleMinus(option)}
              >
                -
              </button>
              <button
                type="button"
                className={`px-2 py-1 rounded ${
                  selectedOptions[option] === null ? "bg-white " : "bg-gray-400"
                } text-black`}
                onClick={() => handleReset(option)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
