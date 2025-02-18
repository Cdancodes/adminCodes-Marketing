import { Eye, Ticket } from 'lucide-react';
import React from 'react';

const RecentActivity = ({ data = [], onViewAll }) => {
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return date.toLocaleDateString();
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-orange-100 text-orange-800',
      'Low': 'bg-blue-100 text-blue-800'
    };
    return colors[priority] || colors['Medium'];
  };

  const getStatusColor = (status) => {
    return status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  // Sort data by date (most recent first)
  const sortedData = [...data].sort((a, b) => 
    new Date(b.created) - new Date(a.created)
  );

  // Get only the 5 most recent items
  const recentItems = sortedData.slice(0, 8);

  // Calculate total emails
  const totalEmails = data.length;

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          <span className="text-sm text-gray-500">
            Showing {recentItems.length} of {totalEmails} emails
          </span>
        </div>
        
        <div className="space-y-4">
          {recentItems.map((ticket) => (
            <div 
              key={ticket.id} 
              className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                getPriorityColor(ticket.priority).split(' ')[0]
              }`}>
                <Ticket className={getPriorityColor(ticket.priority).split(' ')[1]} size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {ticket.subject}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {getRelativeTime(ticket.created)}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1 truncate">
                  {ticket.Email}
                </p>
                <div className="flex gap-2 mt-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                </div>
              </div>

              <button 
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                title="View Details"
              >
                <Eye size={20} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={onViewAll}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
          >
            View All Tickets ({totalEmails})
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
