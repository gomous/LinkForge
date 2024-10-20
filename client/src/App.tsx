import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import thirdwebIcon from "./thirdweb.svg";
import Navbar from "./components/Navbar";
import HostPage from "./components/HostPage";
import CreateOpportunityPage from "./components/host_components/CreateOpportunityPage";
import InternshipsPage from "./components/InternshipsPage";
import JobsPage from "./components/JobsPage";
import CompetePage from "./components/CompetePage";
import MentorshipPage from "./components/MentorshipPage";
import CoursesPage from "./components/CoursesPage";
import PracticePage from "./components/PracticePage";
import RegistrationPage from "./components/RegistrationPage";
// import Context from './context/context'

export function App() {
  return (
    <Router>
      <div className="min-h-[80vh] bg-gray-50">
        <Navbar />
        <main className="p-4 pb-10 min-h-[calc(100vh-64px)] flex items-center justify-center container max-w-screen-lg mx-auto">
          <div className="py-4 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/host" element={<HostPage />} />
              <Route path="/internships" element={<InternshipsPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/compete" element={<CompetePage />} />
              <Route path="/mentorship" element={<MentorshipPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route
                path="/create-opportunity"
                element={<CreateOpportunityPage />}
              />
              <Route
                path="/register/:eventType/:eventId"
                element={<RegistrationPage />}
              />
              {/* <Route path="/context" element={<Context/>} /> */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between lg:space-x-12">
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Unlock Your Future
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover global opportunities to learn, showcase your skills, boost
          your resume, and get hired by your dream company.
        </p>
        <div className="bg-purple-100 rounded-lg p-4 mb-8">
          <p className="text-sm text-purple-800 font-semibold">LinkForge!</p>
        </div>
      </div>
      <div className="lg:w-2/3 grid grid-cols-3 gap-4">
        <CategoryCard
          title="Internship"
          description="Gain Practical Experience"
          color="bg-green-100"
          icon="🎓"
          link="/internships"
        />
        <CategoryCard
          title="Mentorship"
          description="Guidance From Top Mentors"
          color="bg-orange-100"
          icon="👨‍🏫"
          link="/mentorship"
        />
        <CategoryCard
          title="Jobs"
          description="Explore Diverse Careers"
          color="bg-blue-100"
          icon="💼"
          link="/jobs"
        />
        <CategoryCard
          title="Courses"
          description="Expand Knowledge Base"
          color="bg-pink-100"
          icon="📚"
          link="/courses"
        />
        <CategoryCard
          title="Compete"
          description="Battle For Excellence"
          color="bg-yellow-100"
          icon="🏆"
          link="/compete"
        />
        <CategoryCard
          title="Practice"
          description="Refine Skills Daily"
          color="bg-purple-100"
          icon="💻"
          link="/practice"
        />
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  color,
  icon,
  link,
}: {
  title: string;
  description: string;
  color: string;
  icon: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className={`${color} p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col`}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}
