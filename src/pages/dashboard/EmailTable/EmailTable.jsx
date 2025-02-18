import {
  AlertTriangle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Edit,
  Eye,
  Filter,
  MoreVertical,
  Search,
  Trash2,
  UserPlus,
  X
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const EmailTable = ({ data = [] }) => {
  const [activeActionMenu, setActiveActionMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all'
  });
  
  const actionMenuRef = useRef(null);
  const filterRef = useRef(null);
  const itemsPerPage = 8;

  // Handle click outside of filter menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter and search data
  const filteredData = data.filter(item => {
    const matchesSearch = (
      item.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const matchesStatus = filters.status === 'all' || item.status === filters.status;
    const matchesPriority = filters.priority === 'all' || item.priority === filters.priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTickets = filteredData.slice(startIndex, endIndex);

  // Reset to first page when filters or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  // Utility functions
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Action handlers
  const handleViewTicket = (ticket) => {
    console.log('View ticket:', ticket);
  };

  const handleEditTicket = (ticket) => {
    console.log('Edit ticket:', ticket);
  };

  const handleAssignTicket = (ticket) => {
    console.log('Assign ticket:', ticket);
  };

  const handleCloseTicket = (ticket) => {
    console.log('Close ticket:', ticket);
  };

  const handleDeleteTicket = (ticket) => {
    console.log('Delete ticket:', ticket);
  };

  // Calculate stats
  const stats = [
    {
      id: 1,
      number: data.length,
      label: 'Total Submissions',
      icon: <ClipboardList size={24} />,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      number: data.filter(item => item.status === 'Open').length,
      label: 'Open Submissions',
      icon: <AlertTriangle size={24} />,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 3,
      number: data.filter(item => item.priority === 'High').length,
      label: 'High Priority',
      icon: <AlertTriangle size={24} />,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 4,
      number: data.filter(item => item.status === 'Closed').length,
      label: 'Closed Submissions',
      icon: <CheckCircle size={24} />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.id}
            className="bg-white rounded-xl p-10 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.iconBg}`}>
                <div className={stat.iconColor}>{stat.icon}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-900 ">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Email Table */}
      <div className="bg-white rounded-xl shadow-sm px-2">
        {/* Header with Title, Search, and Filter */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {/* Left side - Title with count */}
            <h2 className="text-lg font-semibold text-gray-900">
              All Submissions ({filteredData.length})
            </h2>

            {/* Right side - Search and Filter */}
            <div className="flex items-center gap-3">
              {/* Search Input */}
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              {/* Filter Button and Dropdown */}
              <div className="relative" ref={filterRef}>
  {/* Filter Toggle Button */}
  <button
    onClick={() => setIsFilterOpen(!isFilterOpen)}
    className={`px-4 py-2 rounded-full border transition-colors flex items-center gap-2 ${
      isFilterOpen || Object.values(filters).some(v => v !== 'all')
        ? 'bg-indigo-50 border-greenColor text-gray-600 shadow-sm'
        : 'border-greenColor text-gray-600 hover:bg-gray-50'
    }`}
  >
    <Filter className="h-4 w-4" />
    <span>Filter</span>
  </button>

  {/* Filter Dropdown */}
  {isFilterOpen && (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 z-50 p-4">
      <div className="space-y-4">
        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filters.status}
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            className="w-full rounded-lg px-3 py-2 focus:ring-2 transition"
          >
            <option value="all">All Status</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
          <select
            value={filters.priority}
            onChange={(e) => setFilters(prev => ({ ...prev, priority: e.target.value }))}
            className="w-full  rounded-lg px-3 py-2  transition"
          >
            <option value="all">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Reset Filters */}
        <button
          onClick={() => setFilters({ status: 'all', priority: 'all' })}
          className="w-full px-4 py-2 text-sm font-medium text-gray-600  rounded-lg transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  )}
</div>


            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto ">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 ">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentTickets.map((ticket, index) => (
                <tr key={ticket.id} className="border-t border-gray-100 ">
                  <td className="py-4">{startIndex + index + 1}</td>
                  <td className="py-4">{ticket.Email}</td>
                  <td className="py-4">{ticket.subject}</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-4">{new Date(ticket.created).toLocaleDateString()}</td>
                  <td className="py-4 relative">
                    <button 
                      onClick={() => setActiveActionMenu(activeActionMenu === ticket.id ? null : ticket.id)}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                    >
                      <MoreVertical size={16} />
                    </button>

                    {activeActionMenu === ticket.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                        <button
                          onClick={() => {
                            handleViewTicket(ticket);
                            setActiveActionMenu(null);
                          }}
                          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                        >
                          <Eye size={16} />
                          <span>View Details</span>
                        </button>

                        <button
                          onClick={() => {
                            handleEditTicket(ticket);
                            setActiveActionMenu(null);
                          }}
                          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                        >
                          <Edit size={16} />
                          <span>Edit Ticket</span>
                        </button>

                        <button
                          onClick={() => {
                            handleAssignTicket(ticket);
                            setActiveActionMenu(null);
                          }}
                          className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                        >
                          <UserPlus size={16} />
                          <span>Assign To</span>
                        </button>

                        {ticket.status.toLowerCase() === 'open' && (
                          <button
                            onClick={() => {
                              handleCloseTicket(ticket);
                              setActiveActionMenu(null);
                            }}
                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                          >
                            <CheckCircle size={16} />
                            <span>Mark as Closed</span>
                          </button>
                        )}

                        <div className="border-t mt-1">
                          <button
                            onClick={() => {
                              handleDeleteTicket(ticket);
                              setActiveActionMenu(null);
                            }}
                            className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2"
                          >
                            <Trash2 size={16} />
                            <span>Delete Ticket</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Results Summary and Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing {filteredData.length ? startIndex + 1 : 0} to {Math.min(endIndex, filteredData.length)} of{' '}
            {filteredData.length} results
            {data.length !== filteredData.length && (
              <span className="ml-1">
                (Filtered from {data.length} total entries)
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border border-gray-200 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border border-gray-200 ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTable;
