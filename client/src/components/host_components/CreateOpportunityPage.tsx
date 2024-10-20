'use client'

import React, { useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import StepTracker from "./StepTracker"
import BasicDetails from "./BasicDetails"
import RegistrationDetails from "./RegistrationDetails"
import { prepareContractCall, PreparedTransaction } from "thirdweb"
import { useSendTransaction } from "thirdweb/react"
import { contract } from '@/client'
import { useNavigate } from 'react-router-dom'

interface FormData {
  logo: File | null
  type: string
  subType: string
  visibility: string
  title: string
  organization: string
  websiteUrl: string
  festival: string
  modeOfEvent: string
  category: string
  categories: string
  skills: string
  shortDescription: string
  aboutOpportunity: string
  externalRegistration: boolean
  registrationLink: string
  participationType: string
  teamMinSize: number
  teamMaxSize: number
  registrationStartDate: string
  registrationEndDate: string
  hideContact: boolean
  registrationLimit: number
}

export default function CreateOpportunityPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    logo: null,
    type: "",
    subType: "",
    visibility: "public",
    title: "",
    organization: "",
    websiteUrl: "",
    festival: "",
    modeOfEvent: "",
    category: "",
    categories: "",
    skills: "",
    shortDescription: "",
    aboutOpportunity: "",
    externalRegistration: false,
    registrationLink: "",
    participationType: "",
    teamMinSize: 1,
    teamMaxSize: 1,
    registrationStartDate: "",
    registrationEndDate: "",
    hideContact: false,
    registrationLimit: 0,
  })

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" 
        ? (e.target as HTMLInputElement).checked 
        : type === "number" 
          ? parseInt(value, 10) 
          : value,
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    setFormData((prevData) => ({ ...prevData, logo: file }))
  }

  const handleRichTextChange = (content: string) => {
    setFormData((prevData) => ({ ...prevData, aboutOpportunity: content }))
  }

  const handleCategorySelect = (category: string) => {
    setFormData((prevData) => ({ ...prevData, category: category, categories: category }))
  }

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const generateDataArray = (): string[] => {
    return [
      formData.type,
      formData.subType,
      formData.visibility,
      formData.title,
      formData.organization,
      formData.websiteUrl,
      formData.festival,
      formData.modeOfEvent,
      formData.category,
      formData.skills,
      formData.shortDescription,
      formData.aboutOpportunity,
      formData.externalRegistration.toString(),
      formData.registrationLink,
      formData.participationType,
      formData.teamMinSize.toString(),
      formData.teamMaxSize.toString(),
      formData.registrationStartDate,
      formData.registrationEndDate,
      formData.hideContact.toString(),
      formData.registrationLimit.toString(),
    ]
  }

  const { mutate: sendTransaction } = useSendTransaction()

  const handleSubmit = async () => {
    const dataArray = generateDataArray()
    console.log("Data array for blockchain:", dataArray)

    try {
      const transaction = await prepareContractCall({
        contract,
        method: "storeData",
        params: [dataArray],
      }) as PreparedTransaction<any>

      sendTransaction(transaction, {
        onSuccess: (tx) => {
          console.log("Transaction successful:", tx)
          alert("Transaction successful!")
          navigate("/host")
        },
        onError: (error) => {
          console.error("Transaction failed:", error)
        },
      })
    } catch (error) {
      console.error("Error while preparing or sending the transaction:", error)
    }
  }

  const categories = [
    { value: "internships", label: "Internships" },
    { value: "jobs", label: "Jobs" },
    { value: "compete", label: "Compete" },
    { value: "mentorship", label: "Mentorship" },
    { value: "courses", label: "Courses" },
    { value: "practice", label: "Practice" },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <StepTracker currentStep={currentStep} />

      <div className="mt-8">
        {currentStep === 1 && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={formData.category === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategorySelect(category.value)}
                    className="rounded-full"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
            <BasicDetails
              formData={formData}
              handleInputChange={handleInputChange}
              handleFileUpload={handleFileUpload}
              handleRichTextChange={handleRichTextChange}
            />
            <div className="mt-6">
              <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Short Description
              </label>
              <Textarea
                id="shortDescription"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                placeholder="Provide a brief description of your opportunity"
                className="mt-1 block w-full"
                rows={4}
              />
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Take registrations on another platform/website
              </label>
              <div className="flex space-x-4">
                <Button
                  variant={formData.externalRegistration ? "default" : "outline"}
                  onClick={() => setFormData(prev => ({ ...prev, externalRegistration: true }))}
                >
                  Yes
                </Button>
                <Button
                  variant={!formData.externalRegistration ? "default" : "outline"}
                  onClick={() => setFormData(prev => ({ ...prev, externalRegistration: false }))}
                >
                  No
                </Button>
              </div>
            </div>
            <RegistrationDetails
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </>
        )}
      </div>

      <div className="flex justify-between mt-8">
        {currentStep > 1 && (
          <Button onClick={handleBack} variant="outline">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </Button>
        )}
        <div className="ml-auto">
          {currentStep < 2 ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit}>Submit Opportunity</Button>
          )}
        </div>
      </div>
    </div>
  )
}