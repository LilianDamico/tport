import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Index';
import List from '../pages/list/Index';
import Dashboard from '../pages/dashboard/Index';
import LoginPage from '../pages/loginpage/Index';

const AppRoutes: React.FC = () => (
    <Layout>
        <Router>
            <Routes>
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/list/:type" element={<List />} /> {/* Removendo a prop match */}
            </Routes>
        </Router>
    </Layout>
    
);

export default AppRoutes;
