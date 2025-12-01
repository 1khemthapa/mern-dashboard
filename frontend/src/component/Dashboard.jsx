
import React from 'react';
import { BarChart } from '../components/BarChart';
import { PieChart } from '../components/PieChart';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setIsActive }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsActive(false); 
    navigate('/login');  
  };

  return (
    <div className="w-full p-6">
      
      <div className="flex justify-between items-center mb-6 bg-gray-100 p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
          <h2 className="text-lg font-semibold mb-4">Sales Bar Chart</h2>
          <BarChart />
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition">
          <h2 className="text-lg font-semibold mb-4">Revenue Pie Chart</h2>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
