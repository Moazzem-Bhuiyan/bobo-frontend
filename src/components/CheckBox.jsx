"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const CheckboxGroup = ({
  title,
  options,
  groupKey,
  setValue,
  bgColor,
  subtitle,
  headbgcolor,
}) => {
  const [selectedOptions, setSelectedOptions] = useState(
    options.reduce((acc, option) => {
      acc[option] = null;
      return acc;
    }, {})
  );

  const t = useTranslations("cycleOne");

  const handlePlus = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: true,
    }));
    setValue(`${groupKey}.${option}`, true);
  };

  const handleMinus = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: false,
    }));
    setValue(`${groupKey}.${option}`, false);
  };

  const handleReset = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: null,
    }));
    setValue(`${groupKey}.${option}`, null);
  };

  return (
    <div>
      {/* <h3 className="font-medium mb-2 text-center ">{ t (`${title}`)} </h3> */}

      <div
        className="flex flex-col space-y-2 p-4 rounded-3xl border"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <h1
          className=" text-center  p-2 rounded-3xl text-white "
          style={{ backgroundColor: headbgcolor }}
        >
          {t(`${subtitle}`)}
        </h1>
        {options.map((option) => (
          <div
            key={option}
            className="p-2  rounded flex items-center justify-between"
          >
            <div className="flex items-center">{t(`${option}`)}</div>

            {/* Buttons for plus, minus, and reset */}
            <div className="flex space-x-2 items-center">
              <button
                type="button"
                className={`px-2 py-1 rounded ${
                  selectedOptions[option] === true
                    ? "bg-green-500 text-white"
                    : "bg-white"
                } text-black`}
                onClick={() => handlePlus(option)}
              >
                +
              </button>
              <button
                type="button"
                className={`px-2 py-1 rounded ${
                  selectedOptions[option] === false
                    ? "bg-red-500 text-white"
                    : "bg-white"
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

// ----------------------------------------------------------

// "use client";
// import { Popover } from "@headlessui/react"; // Assuming you're using Headless UI for Popovers
// import { useTranslations } from "next-intl";
// import { useState } from "react";

// const CheckboxGroup = ({
//   title,
//   options,
//   groupKey,
//   setValue,
//   bgColor,
//   subtitle,
//   headbgcolor,
// }) => {
//   const [selectedOptions, setSelectedOptions] = useState(
//     options.reduce((acc, option) => {
//       acc[option] = null;
//       return acc;
//     }, {})
//   );

//   const [showPopover, setShowPopover] = useState({}); // To control each popover visibility
//   const t = useTranslations("cycleOne");

//   const handlePlus = (option) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [option]: true,
//     }));
//     setValue(`${groupKey}.${option}`, true);
//     handlePopoverShow(option); // Show popover
//   };

//   const handleMinus = (option) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [option]: false,
//     }));
//     setValue(`${groupKey}.${option}`, false);
//     handlePopoverShow(option); // Show popover
//   };

//   const handleReset = (option) => {
//     setSelectedOptions((prev) => ({
//       ...prev,
//       [option]: null,
//     }));
//     setValue(`${groupKey}.${option}`, null);
//     handlePopoverShow(option); // Show popover
//   };

//   // Function to handle popover visibility and hide it after 2 seconds
//   const handlePopoverShow = (option) => {
//     setShowPopover((prev) => ({
//       ...prev,
//       [option]: true,
//     }));

//     setTimeout(() => {
//       setShowPopover((prev) => ({
//         ...prev,
//         [option]: false,
//       }));
//     }, 1000); // Hide after 2 seconds
//   };

//   return (
//     <div>
//       <div
//         className="flex flex-col space-y-2 p-4 rounded-3xl border"
//         style={{
//           backgroundColor: bgColor,
//         }}
//       >
//         <h1
//           className=" text-center  p-2 rounded-3xl text-white "
//           style={{ backgroundColor: headbgcolor }}
//         >
//           {t(`${subtitle}`)}
//         </h1>
//         {options.map((option) => (
//           <div
//             key={option}
//             className="p-2  rounded flex items-center justify-between"
//           >
//             <div className="flex items-center">{t(`${option}`)}</div>

//             {/* Buttons for plus, minus, and reset with popovers */}
//             <div className="flex space-x-2 items-center">
//               {/* Plus Button */}
//               <Popover className="relative">
//                 <Popover.Button
//                   type="button"
//                   className={`px-2 py-1 rounded ${
//                     selectedOptions[option] === true
//                       ? "bg-green-500 text-white"
//                       : "bg-white"
//                   } text-black`}
//                   onClick={() => handlePlus(option)}
//                 >
//                   +
//                 </Popover.Button>
//                 {showPopover[option] && (
//                   <Popover.Panel className="absolute z-10 bg-white p-2 rounded shadow-lg mt-2 w-40">
//                    Positive FeedBack
//                   </Popover.Panel>
//                 )}
//               </Popover>

//               {/* Minus Button */}
//               <Popover className="relative">
//                 <Popover.Button
//                   type="button"
//                   className={`px-2 py-1 rounded ${
//                     selectedOptions[option] === false
//                       ? "bg-red-500 text-white"
//                       : "bg-white"
//                   } text-black`}
//                   onClick={() => handleMinus(option)}
//                 >
//                   -
//                 </Popover.Button>
//                 {showPopover[option] && (
//                   <Popover.Panel className="absolute z-10 bg-white p-2 rounded shadow-lg mt-2 w-40">
//                     Negative FeedBack
//                   </Popover.Panel>
//                 )}
//               </Popover>

//               {/* Reset Button */}
//               <Popover className="relative">
//                 <Popover.Button
//                   type="button"
//                   className={`px-2 py-1 rounded ${
//                     selectedOptions[option] === null
//                       ? "bg-white"
//                       : "bg-gray-400"
//                   } text-black`}
//                   onClick={() => handleReset(option)}
//                 >
//                   ×
//                 </Popover.Button>
//                 {showPopover[option] && (
//                   <Popover.Panel className="absolute z-10 bg-white p-2 rounded shadow-lg mt-2 w-40">
//                     Reset Select
//                   </Popover.Panel>
//                 )}
//               </Popover>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CheckboxGroup;
