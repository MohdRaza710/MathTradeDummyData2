import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Portfolio } from '../Screens'
import allPaths from './paths'
// import Page404 from '../Screens/Page404'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={allPaths.PORTFOLIO} element={<Portfolio />} />
                {/* <Route path={allPaths.CONTACT} element={<ContactUs />} /> */}
                {/* <Route path={allPaths.FUND_MANAGEMENT} element={<FundManagement />} /> */}
                {/* <Route path={allPaths.PORTFOLIO_NEW} element={<PortfolioNew />} /> */}
                {/* <Route path={allPaths.GEO_FOCUS} element={<GeoFocus />} /> */}
                {/* <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </Router>
    )
}

export { AppRoutes }

