import { Bell, ChevronDown, LogOut, Menu, Settings, User } from 'lucide-react';
import React, { useRef, useState } from 'react';
import img1 from "../../../../public/assets/brand.png";

const Navbar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileRef = useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
    <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 md:px-6 py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
              >
                <Menu size={20} />
              </button>
              <h2 className="text-xl font-semibold text-gray-800">{activeMenuItem}</h2>
            </div>
            
            {/* Profile and Notifications */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
                >
                  <img
                    src={img1}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700 hidden md:block">Codes And Marketing</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transform transition-transform duration-200 ${
                      showProfileMenu ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Profile Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <button
                      onClick={() => {
                        // Add your profile action here
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </button>

                    <button
                      onClick={() => {
                        // Add your settings action here
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </button>

                    <div className="border-t border-gray-100 my-1"></div>

                    <button
                      onClick={() => {
                        // Add your logout action here
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Navbar
