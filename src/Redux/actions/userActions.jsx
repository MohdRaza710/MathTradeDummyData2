import { OVERVIEW_ALGORITHM, ALGO_INFORMATION, PORTFOLIO_PERFORMANCE_GRAPH, ALGO_MART_GRAPH, DRAWDOWN, ALGO_PRINCIPLE, WATCH_LIST, STRATEGY_EQUITY, CAPITAL_GROWTH, DRAWDOWN_TABLE, HISTORICAL_GRAPH, PORTFOLIO_EFFICIENCY, OVERVIEW_TABLE, ROLLING_RETURN_TABLE, TRADE_LOG_TABLE, RELATED_CONST_STOCK, HISTORICAL_RETURN_TABLE, ROLLING_RETURN_GRAPH, INFORMATION_TOP_TABLE, ALOG_TRADING_CARDS } from '../types'

const setOverviewAlgorithm = (overviewAlgorithm) => {
    return {
        type: OVERVIEW_ALGORITHM,
        overviewAlgorithm
    }
}

const setAlgoInformation = (algoInformation) => {
    return {
        type: ALGO_INFORMATION,
        algoInformation
    }
}

const setAlgoPrinciple = (algoPrinciple) => {
    return {
        type: ALGO_PRINCIPLE,
        algoPrinciple
    }
}

const setWatchList = (watchList) => {
    return {
        type: WATCH_LIST,
        watchList
    }
}

const setStrategyEquity = (strategyEquity) => {
    return {
        type: STRATEGY_EQUITY,
        strategyEquity
    }
}

const setCapitalGrowth = (capitalGrowth) => {
    return {
        type: CAPITAL_GROWTH,
        capitalGrowth
    }
}

const setDrawDownTable = (drawDownTable) => {
    return {
        type: DRAWDOWN_TABLE,
        drawDownTable
    }
}
const setDrawDown = (drawDown) => {
    return {
        type: DRAWDOWN,
        drawDown
    }
}

const setHistoricalGraph = (historicalGraph) => {
    return {
        type: HISTORICAL_GRAPH,
        historicalGraph
    }
}

const setAlgoMartGraph = (algoMartGraph) => {
    return {
        type: ALGO_MART_GRAPH,
        algoMartGraph
    }
}

const setPortfolioPerformanceGraph = (portfolioPerformanceGraph) => {
    return {
        type: PORTFOLIO_PERFORMANCE_GRAPH,
        portfolioPerformanceGraph
    }
}
const setPortfolioEfficiency = (portfolioEfficiency) => {
    return {
        type: PORTFOLIO_EFFICIENCY,
        portfolioEfficiency
    }
}
const setOverviewTable = (overviewTable) => {
    return {
        type: OVERVIEW_TABLE,
        overviewTable
    }
}
const setRollingReturnTable = (rollingReturnTable) => {
    return {
        type: ROLLING_RETURN_TABLE,
        rollingReturnTable
    }
}
const setTradeLogTable = (tradeLogTable) => {
    return {
        type: TRADE_LOG_TABLE,
        tradeLogTable
    }
}
const setRelatedConstStock = (relatedConstStock) => {
    return {
        type: RELATED_CONST_STOCK,
        relatedConstStock
    }
}
const setHistoricalReturnTable = (historicalReturnTable) => {
    return {
        type: HISTORICAL_RETURN_TABLE,
        historicalReturnTable
    }
}
const setRollingReturnsGraph = (rollingReturnGraph) => {
    return {
        type: ROLLING_RETURN_GRAPH,
        rollingReturnGraph
    }
}
const setInformationTopTable = (informationTopTable) => {
    return {
        type: INFORMATION_TOP_TABLE,
        informationTopTable
    }
}

const setAlgotradingCards = (algoTrdaingCard) => {
    return {
        type: ALOG_TRADING_CARDS,
        algoTrdaingCard
    }
}
export {
    setOverviewAlgorithm,
    setAlgoInformation,
    setAlgoPrinciple,
    setWatchList,
    setStrategyEquity,
    setCapitalGrowth,
    setDrawDownTable,
    setHistoricalGraph,
    setDrawDown,
    setAlgoMartGraph,
    setPortfolioPerformanceGraph,
    setPortfolioEfficiency,
    setOverviewTable,
    setRollingReturnTable,
    setTradeLogTable,
    setRelatedConstStock,
    setHistoricalReturnTable,
    setRollingReturnsGraph,
    setInformationTopTable,
    setAlgotradingCards
}