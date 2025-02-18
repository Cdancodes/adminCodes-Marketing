import React, { useState } from 'react'
import EmailTable from './EmailTable/EmailTable'
import Navbar from './Navbar/Navbar'
import RecentActivity from './RecentActivity/RecentActivity'
import SlideBar from './SlideBar/SlideBar'
import StatsCard from './StatsCard/StatsCard'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Moved submissionsData here to share across components
  const submissionsData = [
    {
      id: "SUB001",
      Email: "john.smith@example.com",
      subject: "Website Design Proposal",
      priority: "High",
      status: "Open",
      created: "2024-02-15" 
    },
    {
      id: "SUB002",
      Email: "emma.wilson@example.com",
      subject: "Social Media Campaign",
      priority: "Medium",
      status: "Open",
      created: "2024-02-14"
    },
    {
      id: "SUB003",
      Email: "michael.brown@example.com",
      subject: "SEO Optimization Request",
      priority: "Low",
      status: "Closed",
      created: "2024-02-13"
    },
    {
      id: "SUB004",
      Email: "sophia.davis@example.com",
      subject: "Content Writing Project",
      priority: "Medium",
      status: "Open",
      created: "2024-02-12"
    },
    {
      id: "SUB005",
      Email: "james.taylor@example.com",
      subject: "Logo Design Request",
      priority: "High",
      status: "Open",
      created: "2024-02-11"
    },
    {
      id: "SUB006",
      Email: "olivia.jones@example.com",
      subject: "Email Marketing Campaign",
      priority: "Low",
      status: "Closed",
      created: "2024-02-10"
    },
    {
      id: "SUB007",
      Email: "william.anderson@example.com",
      subject: "PPC Campaign Setup",
      priority: "High",
      status: "Open",
      created: "2024-02-09"
    },
    {
      id: "SUB008",
      Email: "ava.martinez@example.com",
      subject: "Website Maintenance",
      priority: "Medium",
      status: "Open",
      created: "2024-02-08"
    },
    {
      id: "SUB009",
      Email: "lucas.garcia@example.com",
      subject: "Brand Strategy Consultation",
      priority: "High",
      status: "Closed",
      created: "2024-02-07"
    },
    {
      id: "SUB010",
      Email: "isabella.miller@example.com",
      subject: "Social Media Management",
      priority: "Medium",
      status: "Open",
      created: "2024-02-06"
    }
  ];

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'email':
        return (
          <div className="space-y-6 ">
            {/* <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                All Tickets
              </h2>
              <button
                onClick={() => setActiveSection('dashboard')}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2"
              >
                ← Back to Overview
              </button>
            </div> */}
            <EmailTable data={submissionsData} />
          </div>
        );
      case 'dashboard':
      default:
        return (
          <div className="space-y-6">
            <StatsCard data={submissionsData} />
            <RecentActivity 
              data={submissionsData}
              onViewAll={() => setActiveSection('email')} 
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <SlideBar 
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          onToggle={handleSidebarToggle}
        />
        
        {/* Main Content */}
        <div 
          className={`
            flex-1 transition-all duration-300 ease-in-out
            ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}
          `}
        >
          {/* Navbar */}
          <Navbar />
          
          {/* Main Content Area */}
          <main className="p-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              </h1>
              
              {/* Dynamic Content */}
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


