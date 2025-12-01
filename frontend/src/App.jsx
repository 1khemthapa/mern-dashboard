
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';
import Dashboard from './component/Dashboard';
import UploadExcel from './component/UploadExcel';
import ManageSales from './component/ManageSales';

const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsActive(!!token);
  }, []);

  return (
    <div className="flex min-h-screen">
      {isActive && (
        <div className="w-1/4 h-screen p-4 shadow-lg">
          <Sidebar />
        </div>
      )}

    
      <div className="flex-1 p-4">
        <Routes>

          <Route path="/login" element={<Login setIsActive={setIsActive} />} />

     
          <Route
            path="/"
            element={isActive ? <Dashboard setIsActive={setIsActive} /> : <Navigate to="/login" />}
          />
          <Route
            path="/upload-excel"
            element={isActive ? <UploadExcel /> : <Navigate to="/login" />}
          />
          <Route
            path="/manage-sales"
            element={isActive ? <ManageSales /> : <Navigate to="/login" />}
          />

    
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
