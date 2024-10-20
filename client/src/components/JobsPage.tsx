import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Briefcase, DollarSign, Clock } from "lucide-react";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="container mx-auto px-4 py-0.1">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <Input placeholder="Job title, keywords, or company" className="flex-grow" />
          <Input placeholder="Location" className="md:w-1/4" />
          <Button className="md:w-1/6 bg-green-600 hover:bg-green-700">
            <Search className="mr-2 h-4 w-4" /> Search Jobs
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All Jobs</TabsTrigger>
          <TabsTrigger value="remote" onClick={() => setActiveTab("remote")}>Remote</TabsTrigger>
          <TabsTrigger value="full-time" onClick={() => setActiveTab("full-time")}>Full-time</TabsTrigger>
          <TabsTrigger value="part-time" onClick={() => setActiveTab("part-time")}>Part-time</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 gap-6">
        {jobs
          .filter(job => activeTab === "all" || job.type.toLowerCase().replace(" ", "-") === activeTab)
          .map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
                    <p className="text-xl text-gray-600 mb-2">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="mr-1 h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="mr-1 h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <img src={job.logo} alt={job.company} className="w-16 h-16 object-contain mb-4" />
                    <Button className="bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Job Description:</h3>
                  <p className="text-gray-700">{job.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
          Load More Jobs
        </Button>
      </div>
    </div>
  );
}

const jobs = [
  {
    title: "Senior Software Engineer",
    company: "TechGiant Inc.",
    logo: "/placeholder.svg?height=64&width=64",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $180,000",
    posted: "Posted 2 days ago",
    description: "We are seeking a talented Senior Software Engineer to join our innovative team. The ideal candidate will have strong experience in full-stack development and a passion for creating scalable, efficient solutions."
  },
  {
    title: "Product Manager",
    company: "InnovateCo",
    logo: "/placeholder.svg?height=64&width=64",
    location: "New York, NY",
    type: "Full-time",
    salary: "$100,000 - $150,000",
    posted: "Posted 5 days ago",
    description: "Join our fast-paced team as a Product Manager. You'll be responsible for driving product strategy, working closely with cross-functional teams to deliver exceptional user experiences."
  },
  {
    title: "Data Scientist",
    company: "DataDriven LLC",
    logo: "/placeholder.svg?height=64&width=64",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $140,000",
    posted: "Posted 1 week ago",
    description: "We're looking for a skilled Data Scientist to help us uncover insights from complex datasets. The ideal candidate will have strong statistical skills and experience with machine learning algorithms."
  },
  {
    title: "UX/UI Designer",
    company: "DesignMasters",
    logo: "/placeholder.svg?height=64&width=64",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    posted: "Posted 3 days ago",
    description: "Join our creative team as a UX/UI Designer. You'll be responsible for creating intuitive, visually appealing interfaces for web and mobile applications."
  },


  {
    title: "UX/UI Designer 2",
    company: "DesignMasters",
    logo: "/placeholder.svg?height=64&width=64",
    location: "Los Angeles, CA",
    type: "part-time",
    salary: "$80,000 - $120,000",
    posted: "Posted 3 days ago",
    description: "Join our creative team as a UX/UI Designer. You'll be responsible for creating intuitive, visually appealing interfaces for web and mobile applications."
  }
];
