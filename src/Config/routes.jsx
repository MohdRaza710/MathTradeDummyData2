import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Portfolio, PortfolioNew, ContactUs, FundManagement, GeoFocus, AlgorithmNew } from '../Screens';
import allPaths from './paths.jsx';
import MenuLayout from '../Components/MenuLayout/MenuLayout.jsx'; // Import your MenuLayout component

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Wrap all routes that should show the menu with MenuLayout */}
                <Route Component={MenuLayout}>
                    <Route path={allPaths.HOME} element={<Portfolio />} />
                    <Route path={allPaths.PORTFOLIO} element={<PortfolioNew />} />
                    <Route path={allPaths.CONTACT} element={<ContactUs />} />
                    <Route path={allPaths.FUNDMANAGEMENT} element={<FundManagement />} />
                    <Route path={allPaths.GEO_FOCUS} element={<GeoFocus />} />
                    <Route path={allPaths.ALGORITHM_INFO} element={<AlgorithmNew />} />
                </Route>
            </Routes>
        </Router>
    );
};

export { AppRoutes };