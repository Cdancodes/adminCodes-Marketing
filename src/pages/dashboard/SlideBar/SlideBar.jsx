import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Home,
  Mail,
  MessageSquare,
  Settings,
  Ticket,
  Users,Menu
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const SlideBar = ({ activeSection, onSectionChange, onToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Notify parent component when sidebar state changes
  useEffect(() => {
    onToggle?.(isCollapsed);
  }, [isCollapsed, onToggle]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { 
      id: 'dashboard',
      label: 'Dashboard', 
      icon: <Home size={20} />
    },
    { 
      id: 'email',
      label: 'Email', 
      icon: <Mail size={20} />
    },
    // { 
    //   id: 'tickets',
    //   label: 'Tickets', 
    //   icon: <Ticket size={20} />
    // },
    { 
      id: 'users',
      label: 'Users', 
      icon: <Users size={20} />
    },
    { 
      id: 'chat',
      label: 'Chat', 
      icon: <MessageSquare size={20} />
    },
    // { 
    //   id: 'calendar',
    //   label: 'Calendar', 
    //   icon: <Calendar size={20} />
    // },
    { 
      id: 'settings',
      label: 'Settings', 
      icon: <Settings size={20} />
    }
  ];

  return (
    <div 
      className={`
        fixed left-0 top-0 h-screen bg-[#1a1f36] text-white
        transition-all duration-300 ease-in-out z-30
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
    >
      {/* Header with toggle button */}
      <div className="flex items-center justify-between h-16 px-4">
        <h1 className={`font-bold text-xl transition-opacity duration-200 ${
          isCollapsed ? 'opacity-0 hidden' : 'opacity-100'
        }`}>
          Dashboard
        </h1>
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
        >
          {isCollapsed ? <Menu size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-6 px-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`
              w-full flex items-center px-4 py-3 mb-2 rounded-lg
              transition-all duration-200
              ${activeSection === item.id 
                ? 'bg-indigo-500/10 text-white' 
                : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
              }
            `}
          >
            <span className="flex items-center justify-center">
              {item.icon}
            </span>
            <span 
              className={`
                ml-3 whitespace-nowrap transition-all duration-200
                ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}
              `}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SlideBar;
