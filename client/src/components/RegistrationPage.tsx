import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function RegistrationPage() {
  const { eventType, eventId } = useParams<{ eventType: string; eventId: string }>()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: ''
  })

  const eventDetails = getEventDetails(eventType, eventId)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{eventDetails.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p className="text-gray-600">{eventDetails.description}</p>
          <p className="text-sm text-gray-500 mt-2">Number of applicants: {eventDetails.applicants}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="resume">Resume</Label>
            <Input id="resume" name="resume" type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
          </div>
          <div>
            <Label htmlFor="coverLetter">Cover Letter</Label>
            <Textarea id="coverLetter" name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} rows={4} />
          </div>
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </CardContent>
    </Card>
  )
}

function getEventDetails(eventType: string | undefined, eventId: string | undefined) {
    const formattedEventType = eventType ? `${eventType.charAt(0).toUpperCase()}${eventType.slice(1)}` : 'Unknown Event';
    const eventIdText = eventId || 'Unknown ID';
  
    return {
      title: `${formattedEventType} Application: ${eventIdText}`,
      description: `This is a ${formattedEventType} opportunity with ID ${eventIdText}. Please fill out the form below to apply.`,
      applicants: Math.floor(Math.random() * 1000) + 100, // Random number of applicants
    }
  }
  