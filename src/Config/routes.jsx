import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Portfolio, ContactUs, FundManagement, PortfolioNew, GeoFocus } from '../Screens'
import allPaths from './paths'



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={allPaths.PORTFOLIO} component={Portfolio} />
                <Route exact path={allPaths.CONTACT} component={ContactUs} />
                <Route exact path={allPaths.FUND_MANAGEMENT} component={FundManagement} />
                <Route exact path={allPaths.PORTFOLIO} component={PortfolioNew} />
                <Route exact path={allPaths.GEO_FOCUS} component={GeoFocus} />
                <Route component={Page404} />

            </Switch>
        </Router>
    )
}

export {
    Routes
}