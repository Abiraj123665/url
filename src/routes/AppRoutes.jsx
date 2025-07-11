import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AdminPage from '../pages/AdminPage';
import UserPage from '../pages/UserPage';
import { useAuth } from '../context/AuthContext';
import { PATHS } from '../config/pathConfig';

const AppRoutes = () => {
  const { role } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {role === 'admin' && <Route path={PATHS.ADMIN} element={<AdminPage />} />}
      {role === 'user' && <Route path={PATHS.USER} element={<UserPage />} />}
      <Route path="*" element={<Navigate to={PATHS.HOME} />} />
    </Routes>
  );
};

export default AppRoutes;