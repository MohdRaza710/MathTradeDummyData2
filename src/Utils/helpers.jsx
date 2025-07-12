import axios from 'axios'
import allPaths from '../Config/paths'
import { ALGOINFO, PORTFOLIO } from './apis'


const setActiveMenu = (path) => path === allPaths.HOME ? 0 : path === allPaths.PORTFOLIO ? 1 : path === allPaths.ALGO ? 2 : path === allPaths.ALGORITHM_INFO ? 3 : path === allPaths.FUNDMANAGEMENT ? 4 : path === allPaths.STOCK_INFO ? 5 : path === allPaths.CONTACT ? 6 : 7


const userObject = (result) => {
    const { profileObj } = result
    return {
        email: profileObj?.email,
        fullName: `${profileObj?.givenName} ${profileObj?.familyName}`,
        uid: profileObj?.googleId
    }
}




const convertTitle = (val) => val.charAt(0).toUpperCase() + val.slice(1)

const stringLimiter = (val, limit = 50) => val?.length > limit ? `${val.slice(0, limit)}...` : val
const fetchCardsData = (userActions) => {
    axios.get(PORTFOLIO?.GET?.ALL_TRADING_CARDS)
        .then((res) => {
            const { data } = res
            userActions?.setAlgotradingCards(data?.data || [])
        })
        .catch((e) => {
            console.log('e', e)
        })
}
const getAlgoInfoPageData = (_id, userActions) => {
    axios.get(`${ALGOINFO?.GET?.DRAWDOWN_TABLE}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setDrawDownTable(data?.data || [])
            // console.log('DRAWDOWN_TABLE*******', data?.data)
        })
        .catch((e) => console.log('e', e))

    axios.get(`${ALGOINFO?.GET?.DRAWDOWN}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setDrawDown(data?.data || [])
            // console.log('DRAWDOWN*******', data?.data)
        })
        .catch((e) => console.log('e', e))

    axios.get(`${ALGOINFO?.GET?.HISTORICAL_GRAPH}/${_id}`)
        .then((res) => {
            const { data } = res
            // setMystate(data?.data)
            userActions?.setHistoricalGraph(data?.data || [])
            // console.log('HISTORICAL_GRAPH*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO?.GET?.PORTFOLIO_EFFICIENCY}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setPortfolioEfficiency(data?.data || [])
            // console.log('PORTFOLIO_EFFICIENCY*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO?.GET?.OVERVIEW}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setOverviewTable(data?.data || [])
            // console.log('OVERVIEW TABLE*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO?.GET?.ROLLING_RETURN}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setRollingReturnTable(data?.data || [])
            // console.log('ROLLING_RETURN TABLE*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO?.GET?.TRADE_LOG_TABLE}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setTradeLogTable(data?.data || [])
            // console.log('TRADE_LOG_TABLE*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO?.GET?.RELATED_CONST_STOCK}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setRelatedConstStock(data?.data || [])
            // console.log('RELATED_CONST_STOCK*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO.GET.HISTORICAL_RETURNS}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setHistoricalReturnTable(data?.data || [])
            // console.log('HISTORICAL_RETURNS*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO.GET.ROLLING_RETURNS_GRAPH}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setRollingReturnsGraph(data?.data || [])
            // console.log('ROLLING_RETURNS_GRAPH*******', data?.data)
        })
        .catch((e) => console.log('e', e))
    axios.get(`${ALGOINFO.GET.INFORMATION_TOP}/${_id}`)
        .then((res) => {
            const { data } = res
            userActions?.setInformationTopTable(data?.data || [])
            // console.log('INFORMATION_TOP*******', data?.data)
        })
        .catch((e) => console.log('e', e))
}


export {
    convertTitle,
    stringLimiter,
    getAlgoInfoPageData,
    fetchCardsData
}