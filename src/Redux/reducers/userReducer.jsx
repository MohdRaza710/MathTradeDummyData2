import { LOGIN_USER, OVERVIEW_ALGORITHM, PORTFOLIO_PERFORMANCE_GRAPH, ALGO_MART_GRAPH, ALGO_INFORMATION, ALGO_PRINCIPLE, DRAWDOWN, WATCH_LIST, STRATEGY_EQUITY, CAPITAL_GROWTH, DRAWDOWN_TABLE, HISTORICAL_GRAPH, PORTFOLIO_EFFICIENCY, OVERVIEW_TABLE, ROLLING_RETURN_TABLE, TRADE_LOG_TABLE, RELATED_CONST_STOCK, HISTORICAL_RETURN_TABLE, ROLLING_RETURN_GRAPH, INFORMATION_TOP_TABLE, ALOG_TRADING_CARDS } from '../types'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return state
        }
        case OVERVIEW_ALGORITHM: {
            return { ...state, overviewAlgorithm: action.overviewAlgorithm }
        }

        case ALGO_INFORMATION: {
            return { ...state, algoInformation: action.algoInformation }
        }

        case ALGO_PRINCIPLE: {
            return { ...state, algoalgoPrinciple: action.algoPrinciple }
        }
        case WATCH_LIST: {
            return { ...state, watchList: action.watchList }
        }
        case STRATEGY_EQUITY: {
            return { ...state, strategyEquity: action.strategyEquity }
        }
        case CAPITAL_GROWTH: {
            return { ...state, capitalGrowth: action.capitalGrowth }
        }
        case DRAWDOWN_TABLE: {
            return { ...state, drawDownTable: action.drawDownTable }
        }
        case DRAWDOWN: {
            return { ...state, drawDown: action.drawDown }
        }
        case HISTORICAL_GRAPH: {
            return { ...state, historicalGraph: action.historicalGraph }
        }
        case ALGO_MART_GRAPH: {
            return { ...state, algoMartGraph: action.algoMartGraph }
        }
        case PORTFOLIO_PERFORMANCE_GRAPH: {
            return { ...state, portfolioPerformanceGraph: action.portfolioPerformanceGraph }
        }
        case PORTFOLIO_EFFICIENCY: {
            return { ...state, portfolioEfficiency: action.portfolioEfficiency }
        }
        case OVERVIEW_TABLE: {
            return { ...state, overviewTable: action.overviewTable }
        }
        case ROLLING_RETURN_TABLE: {
            return { ...state, rollingReturnTable: action.rollingReturnTable }
        }
        case TRADE_LOG_TABLE: {
            return { ...state, tradeLogTable: action.tradeLogTable }
        }
        case RELATED_CONST_STOCK: {
            return { ...state, relatedConstStock: action.relatedConstStock }
        }
        case HISTORICAL_RETURN_TABLE: {
            return { ...state, historicalReturnTable: action.historicalReturnTable }
        }
        case ROLLING_RETURN_GRAPH: {
            return { ...state, rollingReturnGraph: action.rollingReturnGraph }
        }
        case INFORMATION_TOP_TABLE: {
            return { ...state, informationTopTable: action.informationTopTable }
        }
        case ALOG_TRADING_CARDS: {
            return { ...state, algoTrdaingCard: action.algoTrdaingCard }
        }
        default: {
            return state
        }
    }
}

export default reducer