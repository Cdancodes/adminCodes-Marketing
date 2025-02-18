import { AlertTriangle, CheckCircle, ClipboardList } from "lucide-react";
import React from "react";

const StatsCard = ({ data = [submissionsData] }) => {
  const stats = {
    total: data.length,
    open: data.filter((item) => item.status === "Open").length,
    highPriority: data.filter((item) => item.priority === "High").length,
    closed: data.filter((item) => item.status === "Closed").length,
  };

  const getColorClass = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      yellow: "bg-yellow-100 text-yellow-600",
      red: "bg-red-100 text-red-600",
      green: "bg-green-100 text-green-600",
    };
    return colorMap[color] || colorMap.blue;
  };

  const statsCards = [
    {
      label: "Total Submissions",
      value: stats.total,
      icon: <ClipboardList size={24} />,
      color: "blue",
    },
    {
      label: "Open Submissions",
      value: stats.open,
      icon: <AlertTriangle size={24} />,
      color: "yellow",
    },
    {
      label: "High Priority",
      value: stats.highPriority,
      icon: <AlertTriangle size={24} />,
      color: "red",
    },
    {
      label: "Closed Submissions",
      value: stats.closed,
      icon: <CheckCircle size={24} />,
      color: "green",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClass(
                stat.color
              )}`}
            >
              {stat.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
