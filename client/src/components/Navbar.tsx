import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { client } from "../client";
import { lightTheme, ConnectButton } from "thirdweb/react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/placeholder.svg?height=32&width=32"
                alt="LinkForge logo"
              />
            </Link>
            <div className="ml-4 flex items-center bg-gray-100 rounded-full px-3 py-1">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Opportunities"
                className="ml-2 bg-transparent focus:outline-none text-sm"
              />
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <NavLink to="/internships">Internships</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/compete">Compete</NavLink>
            <NavLink to="/mentorship">Mentorship</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/practice">Practice</NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              to="/host"
              className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              Host
            </Link>
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
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-gray-500 hover:text-gray-900 px-2 py-1 rounded-full hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}
