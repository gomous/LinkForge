import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Calendar, Briefcase, ChevronDown } from "lucide-react";

export default function InternshipsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchError, setSearchError] = useState("Please enter a search term");
  const [locationError, setLocationError] = useState("Location is required");

  return (
    <div className="container mx-auto px-4 py-0.1">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Internships</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <Input 
                placeholder="What are you looking for?" 
                className={`w-full ${searchError ? 'border-red-500' : ''}`}
              />
              {searchError && <p className="text-red-500 text-sm mt-1">{searchError}</p>}
            </div>
            <div className="md:w-1/4">
              <Input 
                placeholder="Location" 
                className={`w-full ${locationError ? 'border-red-500' : ''}`}
              />
              {locationError && <p className="text-red-500 text-sm mt-1">{locationError}</p>}
            </div>
            <Button className="md:w-1/6">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All Internships</TabsTrigger>
          <TabsTrigger value="work-from-home" onClick={() => setActiveTab("work-from-home")}>Work from Home</TabsTrigger>
          <TabsTrigger value="part-time" onClick={() => setActiveTab("part-time")}>Part-time</TabsTrigger>
          <TabsTrigger value="international" onClick={() => setActiveTab("international")}>International</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internships.filter(internship => activeTab === "all" || internship.type === activeTab).map((internship, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{internship.title}</h2>
                  <p className="text-muted-foreground">{internship.company}</p>
                </div>
                <img src={internship.logo} alt={internship.company} className="w-12 h-12 object-contain" />
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-1 h-4 w-4" />
                  <span>{internship.type}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{internship.duration}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">₹{internship.stipend}/month</p>
                  <p className="text-sm text-muted-foreground">{internship.applyBy}</p>
                </div>
                <Link to={`/register/internship/${internship.id}`}>
                  <Button>Apply Now</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline">
          View More Internships <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

const internships = [
  {
    id: 'swe-001',
    title: "Software Development Intern",
    company: "TechCorp",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Bangalore",
    type: "work-from-home",
    duration: "3 months",
    stipend: "15000",
    applyBy: "Apply by 30 Jun 2024"
  },
  {
    id: 'dm-002',
    title: "Digital Marketing Intern",
    company: "MarketPro",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Mumbai",
    type: "part-time",
    duration: "6 months",
    stipend: "10000",
    applyBy: "Apply by 15 Jul 2024"
  },
  {
    id: 'ds-003',
    title: "Data Science Intern",
    company: "DataMinds",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Hyderabad",
    type: "work-from-home",
    duration: "2 months",
    stipend: "20000",
    applyBy: "Apply by 5 Jul 2024"
  },
  {
    id: 'ux-004',
    title: "UI/UX Design Intern",
    company: "DesignHub",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Delhi",
    type: "part-time",
    duration: "4 months",
    stipend: "12000",
    applyBy: "Apply by 20 Jul 2024"
  },
  {
    id: 'cw-005',
    title: "Content Writing Intern",
    company: "WordCraft",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Chennai",
    type: "work-from-home",
    duration: "3 months",
    stipend: "8000",
    applyBy: "Apply by 10 Jul 2024"
  },
  {
    id: 'bd-006',
    title: "Business Development Intern",
    company: "GrowthGenius",
    logo: "/placeholder.svg?height=48&width=48",
    location: "Pune",
    type: "international",
    duration: "6 months",
    stipend: "25000",
    applyBy: "Apply by 1 Aug 2024"
  }
];
