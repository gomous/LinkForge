import React, { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";

// Define the shape of formData
interface FormData {
  registrationLink?: string;
  participationType?: string;
  teamMinSize?: number;
  teamMaxSize?: number;
  registrationStartDate?: string;
  registrationEndDate?: string;
  hideContact?: boolean;
  registrationLimit?: number;
}

interface RegistrationDetailsProps {
  formData: FormData;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function RegistrationDetails({
  formData,
  handleInputChange,
}: RegistrationDetailsProps) {
  const [registrationOnLinkForge, setRegistrationOnLinkForge] = useState(true);
  const [participationType, setParticipationType] = useState("team");

  const handleParticipationType = (type: string) => {
    setParticipationType(type);
    handleInputChange({ target: { name: "participationType", value: type } } as any);
  };

  const generateCSVData = () => {
    // Headers
    const headers = [
      "Registration Link",
      "Participation Type",
      "Team Min Size",
      "Team Max Size",
      "Registration Start Date",
      "Registration End Date",
      "Hide Contact",
      "Registration Limit"
    ];

    // CSV values
    const values = [
      formData.registrationLink || "",
      formData.participationType || "",
      formData.teamMinSize || "",
      formData.teamMaxSize || "",
      formData.registrationStartDate || "",
      formData.registrationEndDate || "",
      formData.hideContact ? "Yes" : "No",
      formData.registrationLimit || ""
    ];

    // Convert to CSV string
    const csvContent = headers.join(",") + "\n" + values.join(",");

    return csvContent;
  };

  const handleSubmit = () => {
    // Generate CSV string
    const csvData = generateCSVData();

    // Create a blob from the CSV data
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create a download link and trigger it
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "registration_details.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Take Registrations on Another Platform */}
      {/* <div className="flex items-center">
        <span className="font-medium text-gray-900">
          Take registrations on another platform/website
        </span>
      </div>
      <div className="flex space-x-4">
        <button
          className={`border ${
            registrationOnLinkForge
              ? "border-orange-400 bg-orange-100"
              : "border-gray-300 bg-white"
          } text-gray-700 py-2 px-4 rounded-md focus:outline-none`}
          onClick={() => setRegistrationOnLinkForge(true)}
        >
          Yes
        </button>
        <button
          className={`border ${
            !registrationOnLinkForge
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 bg-white"
          } text-gray-700 py-2 px-4 rounded-md focus:outline-none`}
          onClick={() => setRegistrationOnLinkForge(false)}
        >
          No
        </button>
      </div> */}

      {/* Conditional input for registration link */}
      {registrationOnLinkForge && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Registration Link
          </label>
          <input
            type="url"
            name="registrationLink"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter the external registration link"
            value={formData.registrationLink}
            onChange={handleInputChange}
          />
        </div>
      )}

      {/* Participation Type */}
      <div className="flex items-center mt-4">
        <span className="font-medium text-gray-900">Participation Type *</span>
      </div>
      <div className="flex space-x-4">
        <button
          className={`border ${
            participationType === "individual"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 bg-white"
          } text-gray-700 py-2 px-4 rounded-md focus:outline-none`}
          onClick={() => handleParticipationType("individual")}
        >
          Individual
        </button>
        <button
          className={`border ${
            participationType === "team"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 bg-white"
          } text-gray-700 py-2 px-4 rounded-md focus:outline-none`}
          onClick={() => handleParticipationType("team")}
        >
          Participation as a team
        </button>
      </div>

      {/* Participation Team Size */}
      {participationType === "team" && (
        <div className="flex items-center space-x-2 mt-4">
          <input
            type="number"
            className="border border-gray-300 rounded-md px-4 py-2 w-16"
            placeholder="Min"
            min={1}
            name="teamMinSize"
            value={formData.teamMinSize}
            onChange={handleInputChange}
          />
          <span>Min</span>
          <input
            type="number"
            className="border border-gray-300 rounded-md px-4 py-2 w-16"
            placeholder="Max"
            min={1}
            name="teamMaxSize"
            value={formData.teamMaxSize}
            onChange={handleInputChange}
          />
          <span>Max</span>
        </div>
      )}

      {/* Registration Dates */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Registration Start Date & Time *
        </label>
        <input
          type="datetime-local"
          name="registrationStartDate"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={formData.registrationStartDate}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Registration End Date & Time *
        </label>
        <input
          type="datetime-local"
          name="registrationEndDate"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={formData.registrationEndDate}
          onChange={handleInputChange}
        />
      </div>

      {/* Hide Contact Details */}
      <div className="mt-4 flex items-center">
        <input
          id="hideContact"
          name="hideContact"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          onChange={handleInputChange}
        />
        <label
          htmlFor="hideContact"
          className="ml-3 block text-sm font-medium text-gray-700"
        >
          Hide your contact details from the opportunity page?
        </label>
      </div>

      {/* Number of Registrations Allowed */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Number of Registrations Allowed
        </label>
        <input
          type="number"
          name="registrationLimit"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter the count if only certain number of participants can apply"
          value={formData.registrationLimit}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
