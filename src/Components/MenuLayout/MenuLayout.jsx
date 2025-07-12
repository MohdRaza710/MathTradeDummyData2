import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { loginUser, removeUser } from '../../Redux/actions/authActions'
import Header from './Header'
import { setCollapsed, setShowAlgoPage } from '../../Redux/actions/generalActions'
import { setOverviewAlgorithm, setAlgoInformation, setPortfolioPerformanceGraph, setAlgoMartGraph, setAlgoPrinciple, setWatchList, setStrategyEquity, setCapitalGrowth, setDrawDownTable, setDrawDown, setHistoricalGraph, setPortfolioEfficiency, setOverviewTable, setRollingReturnTable, setTradeLogTable, setRelatedConstStock, setHistoricalReturnTable, setRollingReturnsGraph, setInformationTopTable, setAlgotradingCards } from '../../Redux/actions/userActions'
import { allPaths } from '../../utils/constants'

const MenuLayout = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
    const inlineCollapsed = useSelector(state => state.generalReducer.inlineCollapsed)
    const showPage = useSelector(state => state?.generalReducer?.showPage)
    const [value, setValue] = useState("")
    const [martPage, setMartPage] = useState(showPage)

    useEffect(() => {
        window.addEventListener('resize', setWindowWidth)
        setWindowWidth()
    }, [])

    const setWindowWidth = () => {
        window.innerWidth < 1600 ? dispatch(setCollapsed(true)) : dispatch(setCollapsed(false))
    }

    const authActions = {
        loginUser: (e) => dispatch(loginUser(e)),
        removeUser: () => dispatch(removeUser())
    }

    const userActions = {
        setOverviewAlgorithm: (e) => dispatch(setOverviewAlgorithm(e)),
        setAlgoInformation: (e) => dispatch(setAlgoInformation(e)),
        setAlgoPrinciple: (e) => dispatch(setAlgoPrinciple(e)),
        setWatchList: (e) => dispatch(setWatchList(e)),
        setStrategyEquity: (e) => dispatch(setStrategyEquity(e)),
        setCapitalGrowth: (e) => dispatch(setCapitalGrowth(e)),
        setDrawDownTable: (e) => dispatch(setDrawDownTable(e)),
        setDrawDown: (e) => dispatch(setDrawDown(e)),
        setHistoricalGraph: (e) => dispatch(setHistoricalGraph(e)),
        setAlgoMartGraph: (e) => dispatch(setAlgoMartGraph(e)),
        setPortfolioPerformanceGraph: (e) => dispatch(setPortfolioPerformanceGraph(e)),
        setPortfolioEfficiency: (e) => dispatch(setPortfolioEfficiency(e)),
        setOverviewTable: (e) => dispatch(setOverviewTable(e)),
        setRollingReturnTable: (e) => dispatch(setRollingReturnTable(e)),
        setTradeLogTable: (e) => dispatch(setTradeLogTable(e)),
        setRelatedConstStock: (e) => dispatch(setRelatedConstStock(e)),
        setHistoricalReturnTable: (e) => dispatch(setHistoricalReturnTable(e)),
        setRollingReturnsGraph: (e) => dispatch(setRollingReturnsGraph(e)),
        setInformationTopTable: (e) => dispatch(setInformationTopTable(e)),
        setAlgotradingCards: (e) => dispatch(setAlgotradingCards(e)),
    }

    const generalActions = {
        setCollapsed: (e) => dispatch(setCollapsed(e)),
        setShowAlgoPage: (e) => dispatch(setShowAlgoPage(e))
    }

    // if (!user) {
    //     return (
    //         <Redirect to={allPaths?.LOGIN} />
    //     )
    // }

    return (
        <Route
            {...rest}
            render={props => <AddMenu {...props} setMartPage={() => setMartPage(true)} setMartPagef={() => setMartPage(false)} martPage={martPage} component={Component} user={user} authActions={authActions} inlineCollapsed={inlineCollapsed} showPage={showPage} dispatch={dispatch} generalActions={generalActions} userActions={userActions} setSearch={(e) => { setValue(e) }} searchBar={value} />}
        />
    )
}

const AddMenu = ({ component: Component, ...props }) => {
    const { location, user } = props

    useEffect(() => {
        if (user) {
            getUser()
        }
    }, [props?.location?.pathname])

    const getUser = () => {
        //     axios.get(`${GET.USER_BY_ID}/${user._id}`)
        //         .then((res) => {
        //             const { data } = res
        //             if (data.success) {
        //                 dispatch(loginUser(data.user))
        //             }
        //             else {
        //                 // history?.replace(allPaths?.LOGIN)
        //                 dispatch(removeUser())
        //             }
        //         })
        //         .catch((e) => {
        //             dispatch(removeUser())
        //         })
    }

    // if (!user) {
    //     return (
    //         <Redirect to={allPaths?.LOGIN} />
    //     )
    // }

    // console.log('props',inlineCollapsed)
    return (
        <div className='helper-main'>
            <div className='menu-header'>
                <Header
                    user={user}
                    {...props}
                />
            </div>
            <div className='menu-flex'>
                {/* <div className='side-menu1 side_menu_class '>
                    <SideMenu {...props} />
                </div> */}
                <div
                    className={` helper-comp ${location?.pathname !== allPaths.HOME && 'background-layout'}`}
                    style={{
                        // marginLeft: props?.inlineCollapsed ? 80 : 196,
                        // zIndex:-1
                    }}
                >
                    <div className={'components'}>
                        <Component
                            {...props}
                            getUser={getUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuLayout