import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Clock, Star, Users, BarChart } from "lucide-react";
import { useState } from 'react';

// Define the type for a course
interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  reviews: number;
  students: number;
  level: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCourses = courses.filter(course =>
    (selectedCategory === "all" || course.category.toLowerCase() === selectedCategory) &&
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Expand Your Skills with Our Courses</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <Input 
            placeholder="Search for courses..." 
            className="flex-grow" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="md:w-1/6 bg-orange-600 hover:bg-orange-700">
            <Search className="mr-2 h-4 w-4" /> Find Courses
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8" onValueChange={(value: string) => setSelectedCategory(value)}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="tech">Technology</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 relative">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-75" />
              <div className="absolute top-4 left-4 bg-white text-orange-600 px-2 py-1 rounded text-sm font-semibold">
                {course.category}
              </div>
            </div>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.instructor}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 text-yellow-400" />
                  <span>{course.rating} ({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <BarChart className="mr-1 h-4 w-4" />
                  <span>{course.level}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-600">${course.price}</span>
                <Link to={`/register/course/${course.id}`}>
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <BookOpen className="mr-2 h-4 w-4" /> Enroll Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
          Explore More Courses
        </Button>
      </div>
    </div>
  );
}


const courses = [
  {
    id: 'course-001',
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Alan Turing",
    image: "/placeholder.svg?height=192&width=384",
    category: "Technology",
    duration: "8 weeks",
    rating: 4.8,
    reviews: 1250,
    students: 15000,
    level: "Intermediate",
    description: "Learn the foundations of machine learning, including supervised and unsupervised learning, neural networks, and deep learning.",
    price: 99.99
  },
  {
    id: 'course-002',
    title: "Web Development Bootcamp",
    instructor: "Jane Doe",
    image: "/placeholder.svg?height=192&width=384",
    category: "Technology",
    duration: "12 weeks",
    rating: 4.9,
    reviews: 3000,
    students: 25000,
    level: "Beginner",
    description: "A comprehensive course covering HTML, CSS, JavaScript, and modern frameworks to build responsive and dynamic websites.",
    price: 149.99
  },
  {
    id: 'course-003',
    title: "Digital Marketing Mastery",
    instructor: "Michael Brown",
    image: "/placeholder.svg?height=192&width=384",
    category: "Business",
    duration: "6 weeks",
    rating: 4.7,
    reviews: 950,
    students: 10000,
    level: "All Levels",
    description: "Master the art of digital marketing, including SEO, social media marketing, content strategy, and analytics.",
    price: 79.99
  },
  {
    id: 'course-004',
    title: "UX/UI Design Fundamentals",
    instructor: "Emily Johnson",
    image: "/placeholder.svg?height=192&width=384",
    category: "Design",
    duration: "10 weeks",
    rating: 4.8,
    reviews: 1500,
    students: 12000,
    level: "Beginner",
    description: "Learn the principles of user experience and user interface design, including wireframing, prototyping, and user research.",
    price: 129.99
  },
  {
    id: 'course-005',
    title: "Data Science with Python",
    instructor: "Dr. John Smith",
    image: "/placeholder.svg?height=192&width=384",
    category: "Technology",
    duration: "8 weeks",
    rating: 4.9,
    reviews: 2200,
    students: 18000,
    level: "Intermediate",
    description: "Dive into data science using Python, covering data analysis, visualization, machine learning, and statistical modeling.",
    price: 109.99
  },
  {
    id: 'course-006',
    title: "Entrepreneurship 101",
    instructor: "Sarah Williams",
    image:  "/placeholder.svg?height=192&width=384",
    category: "Business",
    duration: "6 weeks",
    rating: 4.7,
    reviews: 800,
    students: 8000,
    level: "Beginner",
    description: "Learn the essentials of starting and running a successful business, including ideation, business planning, and fundraising.",
    price: 89.99
  }
]