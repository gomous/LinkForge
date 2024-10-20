import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Code, Clock, BarChart, Award, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState } from 'react';

export default function PracticePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProblems = practiceProblems.filter((problem) =>
    (selectedCategory === "all" || problem.category.toLowerCase() === selectedCategory.toLowerCase()) &&
    problem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Sharpen Your Skills with Practice</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Search practice problems..." 
            className="flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="md:w-1/6 bg-indigo-600 hover:bg-indigo-700">
            <Search className="mr-2 h-4 w-4" /> Find Problems
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8" onValueChange={(value) => setSelectedCategory(value)}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="all">All Problems</TabsTrigger>
          <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
          <TabsTrigger value="data-structures">Data Structures</TabsTrigger>
          <TabsTrigger value="system-design">System Design</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.map((problem, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">{problem.title}</h2>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {problem.difficulty}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{problem.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Code className="mr-1 h-4 w-4" />
                  <span>{problem.category}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{problem.estimatedTime}</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="mr-1 h-4 w-4" />
                  <span>{problem.successRate}% success rate</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{problem.submissions} submissions</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-gray-600">{problem.points} points</span>
                </div>
              </div>
              <Progress value={problem.completionRate} className="mb-4" />
              <Link to={`/register/practice/${problem.id}`}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Start Practice
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
          Load More Problems
        </Button>
      </div>
    </div>
  );
}

const practiceProblems = [
  // Algorithms Problems
  {
    id: 'problem-001',
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    category: "algorithms",
    estimatedTime: "15 minutes",
    successRate: 85,
    submissions: 1500000,
    points: 10,
    completionRate: 75
  },
  {
    id: 'problem-002',
    title: "Merge Sort",
    difficulty: "Medium",
    description: "Implement merge sort to sort an array of integers in ascending order.",
    category: "algorithms",
    estimatedTime: "30 minutes",
    successRate: 70,
    submissions: 100000,
    points: 20,
    completionRate: 65
  },
  {
    id: 'problem-003',
    title: "Traveling Salesman Problem",
    difficulty: "Hard",
    description: "Given a set of cities and the distance between every pair of cities, find the shortest possible route that visits each city exactly once and returns to the origin city.",
    category: "algorithms",
    estimatedTime: "1.5 hours",
    successRate: 40,
    submissions: 50000,
    points: 40,
    completionRate: 30
  },

  // Data Structures Problems
  {
    id: 'problem-004',
    title: "Implement Stack",
    difficulty: "Easy",
    description: "Implement a stack using an array with push, pop, and peek operations.",
    category: "data-structures",
    estimatedTime: "20 minutes",
    successRate: 90,
    submissions: 800000,
    points: 15,
    completionRate: 80
  },
  {
    id: 'problem-005',
    title: "Balanced Binary Tree",
    difficulty: "Medium",
    description: "Given the root of a binary tree, determine if the tree is height-balanced.",
    category: "data-structures",
    estimatedTime: "35 minutes",
    successRate: 75,
    submissions: 300000,
    points: 25,
    completionRate: 60
  },
  {
    id: 'problem-006',
    title: "LRU Cache",
    difficulty: "Hard",
    description: "Design and implement a data structure for Least Recently Used (LRU) cache.",
    category: "data-structures",
    estimatedTime: "1 hour",
    successRate: 55,
    submissions: 150000,
    points: 35,
    completionRate: 50
  },

  // System Design Problems
  {
    id: 'problem-007',
    title: "Design a URL Shortener",
    difficulty: "Medium",
    description: "Design a URL shortener service that can shorten long URLs into shorter ones and retrieve the original URL when given the shortened URL.",
    category: "system-design",
    estimatedTime: "1 hour",
    successRate: 70,
    submissions: 300000,
    points: 25,
    completionRate: 55
  },
  {
    id: 'problem-008',
    title: "Design a Parking Lot System",
    difficulty: "Medium",
    description: "Design a parking lot system where you can add, remove, and track cars.",
    category: "system-design",
    estimatedTime: "1.5 hours",
    successRate: 65,
    submissions: 120000,
    points: 30,
    completionRate: 50
  },
  {
    id: 'problem-009',
    title: "Design a Distributed File Storage System",
    difficulty: "Hard",
    description: "Design a distributed file storage system like Google Drive that can store, retrieve, and share large files efficiently.",
    category: "system-design",
    estimatedTime: "2 hours",
    successRate: 50,
    submissions: 80000,
    points: 50,
    completionRate: 35
  }
];
