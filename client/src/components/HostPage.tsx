import { Link } from 'react-router-dom'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { ConnectButton, useActiveAccount } from 'thirdweb/react';
import { client } from '@/client';
import { lightTheme } from 'thirdweb/react';


export default function HostPage() {

  const account = useActiveAccount()

  return (
    <div className="">
      {account ? 
      (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=64&width=64" alt="Host" className="w-16 h-16 rounded-full" />
            <div>
              <h1 className="text-3xl font-bold">Host an <span className="text-blue-600">Opportunity</span></h1>
              <p className="text-gray-600">Choose your opportunity category from below</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=64&width=64" alt="Host" className="w-16 h-16 rounded-full" />
          </div>
        </div>
  
        <h2 className="text-2xl font-semibold mb-4">What you want to host 👋</h2>
  
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">For <span className="text-orange-500">Engaging</span> your target audience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <OpportunityCard
              title="General & Case Competitions"
              description="Create Competitions"
              icon="📊"
              color="bg-red-100"
            />
            <OpportunityCard
              title="Innovation Challenges"
              description="Create Challenges"
              icon="💡"
              color="bg-blue-100"
            />
            <OpportunityCard
              title="Quizzes"
              description="Create Quizzes"
              icon="❓"
              color="bg-green-100"
            />
            <OpportunityCard
              title="Hackathons & Coding Challenges"
              description="Create Hackathons"
              icon="💻"
              color="bg-yellow-100"
            />
            <OpportunityCard
              title="Webinars & Workshops"
              description="Create Workshops"
              icon="🎓"
              color="bg-pink-100"
            />
            <OpportunityCard
              title="Cultural Events"
              description="Create Events"
              icon="🎭"
              color="bg-purple-100"
            />
            <OpportunityCard
              title="Conferences"
              description="Create Conferences"
              icon="🎤"
              color="bg-indigo-100"
            />
            <OpportunityCard
              title="Scholarships"
              description="Create Scholarships"
              icon="🎓"
              color="bg-red-100"
            />
          </div>
        </div>
  
        <div>
          <h3 className="text-lg font-medium mb-4">For <span className="text-blue-500">Hiring</span> the right talent</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <OpportunityCard
              title="Jobs"
              description="Create Jobs"
              icon="💼"
              color="bg-blue-100"
            />
            <OpportunityCard
              title="Internships"
              description="Create Internships"
              icon="🚀"
              color="bg-purple-100"
            />
            <OpportunityCard
              title="Hiring Challenges"
              description="Create Challenges"
              icon="🏆"
              color="bg-green-100"
            />
          </div>
        </div>
      </div>
      ) : (
        <ConnectButton
              client={client}
              theme={lightTheme({
                colors: {
                  modalBg: "#f8f9fa",
                  primaryButtonBg: "#0066ff",
                  primaryButtonText: "#ffffff",
                  connectedButtonBg: "#ffffff",
                  connectedButtonBgHover: "#f0f0f0",
                  borderColor: "#e2e8f0",
                  primaryText: "#1a202c",
                  secondaryText: "#718096",
                  tooltipBg: "#000",
                  tooltipText: "#fff",
                  success: "#38a169",
                },
                fontFamily: "Inter, sans-serif",
              })}
              connectButton={{
                label: "Connect Wallet",
                style: {
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#000",
                },
              }}
              detailsButton={{
                style: {
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#000",
                },
              }}
            />

      ) }
    </div>  
  )
}

function OpportunityCard({ title, description, icon, color }: { title: string; description: string; icon: string; color: string }) {
  return (
    <Link to="/create-opportunity" className={`${color} p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 block`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-3xl mb-2">{icon}</div>
          <h4 className="text-sl font-semibold mb-1 text-gray-500">{title}</h4>
          <p className="text-sm text-blue-600">{description} →</p>
        </div>
        <div>
          <InformationCircleIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </Link>
  );
}