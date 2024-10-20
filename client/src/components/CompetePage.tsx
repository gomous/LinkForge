import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, Users, Award } from "lucide-react";
import { useState } from 'react';

export default function CompetePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCompetitions = competitions.filter(competition =>
    (selectedCategory === "all" || competition.category.toLowerCase() === selectedCategory) &&
    competition.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Competitions & Challenges</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Search competitions..." 
            className="flex-grow" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="md:w-1/6 bg-purple-600 hover:bg-purple-700">
            <Search className="mr-2 h-4 w-4" /> Find Challenges
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8" onValueChange={(value) => setSelectedCategory(value)}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="all">All Challenges</TabsTrigger>
          <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
          <TabsTrigger value="coding">Coding Contests</TabsTrigger>
          <TabsTrigger value="business">Business Cases</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompetitions.map((competition, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-indigo-500 relative">
              <img src={competition.image} alt={competition.title} className="w-full h-full object-cover opacity-75" />
              <div className="absolute top-4 left-4 bg-white text-purple-600 px-2 py-1 rounded text-sm font-semibold">
                {competition.category}
              </div>
            </div>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{competition.title}</h2>
              <p className="text-gray-600 mb-4">{competition.organizer}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{competition.date}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{competition.participants} participants</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-1 h-4 w-4" />
                  <span>{competition.prize}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{competition.description}</p>
              <div className="flex justify-between items-center">
                <Link to={`/competition/${competition.id}`}>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    View Details
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

const competitions = [
  {
    id: "comp-001", // Add a unique ID
    title: "Global AI Hackathon",
    organizer: "TechInnovators",
    prize: "$50,000 in prizes",
    date: "Aug 15-17, 2024",
    participants: "5000+ registered",
    description: "A global competition to solve AI challenges with cutting-edge technologies.", // Add description
    category: "hackathons", // Add category
    image: "/images/ai-hackathon.jpg" // Add image
  },
  {
    id: "comp-002", // Add a unique ID
    title: "Sustainable Business Challenge",
    organizer: "EcoEntrepreneurs",
    prize: "$25,000 grand prize",
    date: "Sep 1-30, 2024",
    participants: "2000+ teams",
    description: "Innovate sustainable business models to address environmental challenges.", // Add description
    category: "business", // Add category
    image: "/images/sustainable-business.jpg" // Add image
  },
  {
    id: "comp-003", // Add a unique ID
    title: "Quantum Computing Quest",
    organizer: "QuantumTech",
    prize: "$30,000 + internships",
    date: "Oct 10-12, 2024",
    participants: "1000+ participants",
    description: "A race to create the next breakthrough in quantum computing.", // Add description
    category: "coding", // Add category
    image: "/images/quantum-computing.jpg" // Add image
  },
  {
    id: "comp-004", // Add a unique ID
    title: "Cybersecurity Challenge",
    organizer: "SecureNet",
    prize: "$20,000 + job offers",
    date: "Nov 5-7, 2024",
    participants: "3000+ hackers",
    description: "Compete to solve cybersecurity threats in this intense challenge.", // Add description
    category: "hackathons", // Add category
    image: "/images/cybersecurity-challenge.jpg" // Add image
  },
  {
    id: "comp-005", // Add a unique ID
    title: "FinTech Innovation Cup",
    organizer: "Future Finance",
    prize: "$40,000 in funding",
    date: "Dec 1-3, 2024",
    participants: "1500+ innovators",
    description: "Drive financial innovation with the latest in fintech solutions.", // Add description
    category: "business", // Add category
    image: "/images/fintech-innovation.jpg" // Add image
  },
  {
    id: "comp-006", // Add a unique ID
    title: "Space Tech Odyssey",
    organizer: "Galactic Ventures",
    prize: "$60,000 + NASA tour",
    date: "Jan 15-18, 2025",
    participants: "2500+ dreamers",
    description: "Explore the future of space technology in this cosmic challenge.", // Add description
    category: "hackathons", // Add category
    image: "/images/space-tech-odyssey.jpg" // Add image
  }
];
