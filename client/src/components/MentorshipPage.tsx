import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Briefcase, Clock, Star, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from 'react';

// Define the type for a mentor
interface Mentor {
  id: string;
  name: string;
  title: string;
  experience: string;
  rating: number;
  reviews: number;
  availability: string;
  bio: string;
  price: number;
  skills: string[];
  avatar: string;
  category: string;
}

export default function MentorshipPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredMentors = mentors.filter(mentor =>
    (selectedCategory === "all" || mentor.category.toLowerCase() === selectedCategory) &&
    (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) || mentor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Mentor</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Search by skill, industry, or name" 
            className="flex-grow" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="md:w-1/6 bg-teal-600 hover:bg-teal-700">
            <Search className="mr-2 h-4 w-4" /> Find Mentors
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8" onValueChange={(value: string) => setSelectedCategory(value)}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="all">All Mentors</TabsTrigger>
          <TabsTrigger value="tech">Technology</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="creative">Creative</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-16 w-16 mr-4">
                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                  <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{mentor.name}</h2>
                  <p className="text-gray-600">{mentor.title}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.skills.map((skill, index) => (
                  <span key={index} className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-4">
                <Star className="mr-1 h-4 w-4 text-yellow-400" />
                <span>{mentor.rating} ({mentor.reviews} reviews)</span>
              </div>
              <p className="text-gray-700 mb-4">{mentor.bio}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-teal-600">${mentor.price}/hr</span>
                <Link to={`/mentor/${mentor.id}`}>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <MessageCircle className="mr-2 h-4 w-4" /> Connect
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}



const mentors = [
  {
    id: 'mentor-001',
    name: "Dr. Emily Chen",
    title: "AI Research Scientist",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Machine Learning", "Computer Vision", "Natural Language Processing"],
    experience: "10+ years",
    availability: "2 hours/week",
    rating: 4.9,
    reviews: 120,
    bio: "Passionate about pushing the boundaries of AI. I love helping aspiring data scientists and researchers navigate the complex world of artificial intelligence.",
    price: 150, // Add the price property
    category: "tech" // Add the category property
  },
  {
    id: 'mentor-002',
    name: "Michael Johnson",
    title: "Senior Product Manager",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Product Strategy", "Agile", "User Research"],
    experience: "8+ years",
    availability: "3 hours/week",
    rating: 4.8,
    reviews: 95,
    bio: "Experienced in launching successful products from concept to market. I enjoy mentoring aspiring product managers and sharing insights on product development.",
    price: 120, // Add the price property
    category: "business" // Add the category property
  },
  {
    id: 'mentor-003',
    name: "Sarah Williams",
    title: "UX Design Lead",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["User Experience", "Interaction Design", "Prototyping"],
    experience: "12+ years",
    availability: "2 hours/week",
    rating: 4.9,
    reviews: 150,
    bio: "Passionate about creating intuitive and delightful user experiences. I love mentoring designers and helping them grow in their UX careers.",
    price: 130, // Add the price property
    category: "creative" // Add the category property
  },
  {
    id: 'mentor-004',
    name: "David Lee",
    title: "Startup Founder & Investor",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Entrepreneurship", "Venture Capital", "Business Strategy"],
    experience: "15+ years",
    availability: "1 hour/week",
    rating: 4.7,
    reviews: 80,
    bio: "Serial entrepreneur with multiple successful exits. I'm passionate about helping new founders navigate the challenges of starting and scaling a business.",
    price: 200, // Add the price property
    category: "business" // Add the category property
  },
  {
    id: 'mentor-005',
    name: "Lisa Thompson",
    title: "Marketing Director",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["Digital Marketing", "Brand Strategy", "Content Marketing"],
    experience: "10+ years",
    availability: "2 hours/week",
    rating: 4.8,
    reviews: 110,
    bio: "Expert in building and executing comprehensive marketing strategies. I enjoy mentoring marketers and helping them develop their skills in this ever-evolving field.",
    price: 110, // Add the price property
    category: "business" // Add the category property
  },
  {
    id: 'mentor-006',
    name: "Robert Garcia",
    title: "Software Architect",
    avatar: "/placeholder.svg?height=64&width=64",
    skills: ["System Design", "Cloud Computing", "Microservices"],
    experience: "20+ years",
    availability: "3 hours/week",
    rating: 4.9,
    reviews: 200,
    bio: "Experienced in designing and implementing large-scale distributed systems. I'm passionate about mentoring software engineers and helping them tackle complex architectural challenges.",
    price: 180, // Add the price property
    category: "tech" // Add the category property
  }
];
