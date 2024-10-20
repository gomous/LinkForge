import React, { useState } from "react";
import {
  CloudArrowUpIcon,
  GlobeAltIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import RichTextEditor from "./rich-text-editor";

interface BasicDetailsProps {
  formData: {
    logo: File | null;
    type: string;
    subType: string;
    visibility: string;
    title: string;
    organization: string;
    websiteUrl: string;
    festival: string;
    modeOfEvent: string;
    categories: string;
    skills: string;
    aboutOpportunity: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRichTextChange: (content: string) => void;
}

const BasicDetails: React.FC<BasicDetailsProps> = ({
  formData,
  handleInputChange,
  handleFileUpload,
  handleRichTextChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { value: "internships", label: "Internships" },
    { value: "jobs", label: "Jobs" },
    { value: "compete", label: "Compete" },
    { value: "mentorship", label: "Mentorship" },
    { value: "courses", label: "Courses" },
    { value: "practice", label: "Practice" },
  ];

  const opportunityTypes = [
    { value: "general", label: "General & Case Competitions" },
    { value: "quizzes", label: "Quizzes" },
    { value: "hackathons", label: "Hackathons & Coding Challenges" },
    { value: "webinars", label: "Webinars & Workshops" },
    { value: "cultural", label: "Creative & Cultural Events" },
    { value: "conferences", label: "Conferences" },
    { value: "scholarships", label: "Scholarships" },
  ];

  const subTypeOptions: { [key: string]: string[] } = {
    general: [
      "Innovation Challenges",
      "Case Competition",
      "General Competition",
    ],
    hackathons: ["Online Coding Challenge", "Innovation Challenge"],
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    handleInputChange({
      target: { name: "type", value: category },
    } as React.ChangeEvent<HTMLSelectElement>);
  };

  return (
    <div className="space-y-6">
      {/* Category Selection Buttons */}
      {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Category
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategorySelect(category.value)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div> */}

      {/* Opportunity Logo */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Opportunity Logo *
        </label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudArrowUpIcon className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                Max size of image cannot exceed 1 MB!
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*"
            />
          </label>
        </div>
      </div>

      {/* Opportunity Type */}
      <div>
        <label
          htmlFor="type"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Opportunity Type *
        </label>
        <select
          id="type"
          name="type"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={formData.type}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Opportunity Type</option>
          {opportunityTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Opportunity Sub Type */}
      {formData.type && subTypeOptions[formData.type] && (
        <div>
          <label
            htmlFor="subType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Opportunity Sub Type *
          </label>
          <select
            id="subType"
            name="subType"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={formData.subType}
            onChange={handleInputChange}
            required
          >
            <option value="">Please Select Sub Type</option>
            {subTypeOptions[formData.type].map((subType) => (
              <option key={subType} value={subType}>
                {subType}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Visibility */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Visibility *
        </label>
        <div className="mt-2 space-y-4">
          <div className="flex items-center">
            <input
              id="public"
              name="visibility"
              type="radio"
              value="public"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              onChange={handleInputChange}
              checked={formData.visibility === "public"}
            />
            <label
              htmlFor="public"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              <div className="flex items-center">
                <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
                Open publicly on Unstop
              </div>
              <p className="text-sm text-gray-500">
                Will be visible to all Unstop users.
              </p>
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="invite"
              name="visibility"
              type="radio"
              value="invite"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              onChange={handleInputChange}
              checked={formData.visibility === "invite"}
            />
            <label
              htmlFor="invite"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              <div className="flex items-center">
                <LockClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                Invite Only
              </div>
              <p className="text-sm text-gray-500">
                Will be accessible only via link.
              </p>
            </label>
          </div>
        </div>
      </div>

      {/* Opportunity Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Opportunity Title *
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Opportunity Title"
          maxLength={190}
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <p className="mt-2 text-sm text-gray-500">
          {formData.title.length}/190 characters
        </p>
      </div>

      {/* Organization */}
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter Your Organization *
        </label>
        <input
          type="text"
          name="organization"
          id="organization"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Organization Name"
          value={formData.organization}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Website URL */}
      <div>
        <label
          htmlFor="websiteUrl"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Website URL
        </label>
        <input
          type="url"
          name="websiteUrl"
          id="websiteUrl"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="https://example.com"
          value={formData.websiteUrl}
          onChange={handleInputChange}
        />
      </div>

      {/* Festival */}
      <div>
        <label
          htmlFor="festival"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Festival (Optional)
        </label>
        <input
          type="text"
          name="festival"
          id="festival"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Festival Name"
          value={formData.festival}
          onChange={handleInputChange}
        />
      </div>

      {/* Mode of Event */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mode of Event *
        </label>
        <div className="mt-2 space-y-4">
          <div className="flex items-center">
            <input
              id="online"
              name="modeOfEvent"
              type="radio"
              value="online"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              onChange={handleInputChange}
              checked={formData.modeOfEvent === "online"}
            />
            <label
              htmlFor="online"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Online
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="offline"
              name="modeOfEvent"
              type="radio"
              value="offline"
              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              onChange={handleInputChange}
              checked={formData.modeOfEvent === "offline"}
            />
            <label
              htmlFor="offline"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Offline
            </label>
          </div>
        </div>
      </div>

      {/* Categories
      <div>
        <label htmlFor="categories" className="block text-sm font-medium text-gray-700 mb-2">
          Categories *
        </label>
        <input
          type="text"
          name="categories"
          id="categories"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Category Name"
          value={formData.categories}
          onChange={handleInputChange}
          required
        />
      </div> */}

      {/* Skills */}
      <div>
        <label
          htmlFor="skills"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Skills to be Accessed *
        </label>
        <input
          type="text"
          name="skills"
          id="skills"
          className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter Skills"
          value={formData.skills}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* About Opportunity */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          About Opportunity *
        </label>
        <RichTextEditor 
        // onChange={handleRichTextChange}
         />
      </div>
    </div>
  );
};

export default BasicDetails;
