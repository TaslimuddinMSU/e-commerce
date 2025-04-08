import React from 'react';
const DashboardCard = ({ icon, label, value, color }) => {
    return (
      <div className="bg-white p-4 rounded shadow w-full md:w-1/4 flex items-center space-x-4">
        <div className={`p-3 rounded-full bg-${color}-100 text-${color}-500`}>
          {icon}
        </div>
        <div>
          <h4 className="text-xl font-bold">{value}</h4>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  