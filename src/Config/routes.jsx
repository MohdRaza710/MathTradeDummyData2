import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlgoTradingCards from '../Screens/Algorithum/AlgoTradingCards';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/algotrading-cards" element={<AlgoTradingCards />} />
            {/* Add more routes here as needed */}
        </Routes>
    </Router>
);

export default AppRoutes;