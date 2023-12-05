import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Index';
import List from '../pages/list/Index';
import Dashboard from '../pages/dashboard/Index';

const AppRoutes: React.FC = () => (
    <Layout>
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/list/:type" element={<List />} /> {/* Removendo a prop match */}
            </Routes>
        </Router>
    </Layout>
    
);

export default AppRoutes;
