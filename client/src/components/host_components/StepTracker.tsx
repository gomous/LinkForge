import React from "react";

interface StepTrackerProps {
  currentStep: number;
}

const StepTracker: React.FC<StepTrackerProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center items-center space-x-4 my-4">
      <div className={`flex items-center ${currentStep >= 1 ? "text-blue-600" : "text-gray-400"}`}>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 1 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-400"}`}
        >
          1
        </div>
        <span className="ml-2">Basic Details</span>
      </div>
      <div className={`w-20 h-px ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-400"}`}></div>
      <div className={`flex items-center ${currentStep >= 2 ? "text-blue-600" : "text-gray-400"}`}>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep >= 2 ? "border-blue-600 bg-blue-600 text-white" : "border-gray-400"}`}
        >
          2
        </div>
        <span className="ml-2">Registration Details</span>
      </div>
    </div>
  );
};

export default StepTracker;
