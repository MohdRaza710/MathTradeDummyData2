import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Portfolio, ContactUs, FundManagement, PortfolioNew, GeoFocus } from '../Screens'
import { MenuLayout } from '../Components/MenuLayout/MenuLayout'
import allPaths from './paths'
import { Button, Alert } from '@mui/material'


const Page404 = (props) => {
    const { history } = props
    return (
        <Alert
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={
                <Button
                    type='primary'
                    className='form-button'
                    onClick={() => history.push('/')}
                >
                    Back Home
                </Button>
            }
        />
    )
}


const Routes = () => {
    return (
        <Router>
            <Switch>
                <MenuLayout path={allPaths?.HOME} exact component={Portfolio} />
                <MenuLayout path={allPaths?.GEO_FOCUS} exact component={GeoFocus} />
                <MenuLayout path={allPaths?.PORTFOLIO} exact component={PortfolioNew} />
                <MenuLayout path={allPaths?.FUNDMANAGEMENT} exact component={FundManagement} />
                <MenuLayout path={allPaths?.CONTACT} exact component={ContactUs} />
                <Route path='/:page404' exact component={Page404} />
            </Switch>
        </Router>
    )
}

export {
    Routes,
    Page404
}