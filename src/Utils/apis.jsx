// const host = `https://nft-flask.herokuapp.com`
const host = `http://localhost:5000`
const portfolioApi = `${host}/portfolio`
const algoInfoApi = `${host}/algo-info`
const algoMartApi = `${host}/algo-mart`
const authApi = `${host}/users`

const PORTFOLIO = {
    GET: {
        ALL_TRADING_CARDS: `${portfolioApi}/all-trading-cards`,
        HIGH_YIELD_BONDS: `${portfolioApi}/high-yield-bonds-income-portfolio`,
        STRATEGY_EQUITY: `${portfolioApi}/get-strategy-equity`
    },
    POST: {
    }
}

const ALGOINFO = {
    GET: {
        PORTFOLIO_DIVIDEND_YIELD: `${algoInfoApi}/portfolio-dividend-yield`,
        HISTORICAL_RETURNS: `${algoInfoApi}/historical-returns`,
        PORTFOLIO_EFFICIENCY: `${algoInfoApi}/portfolio-efficiency`,
        OVERVIEW: `${algoInfoApi}/overview`,
        HIGH_YIELD_BONDS_RETURNS: `${algoInfoApi}/high-yield-bonds-income-portfolio-returns`,
        HIGH_YIELD_BONDS: `${algoInfoApi}/high-yeild-bonds-income-portfolio`,
        CAPITAL_GROWTH: `${algoInfoApi}/get-capital-growth`,
        DRAWDOWN: `${algoInfoApi}/get-drawdown`,
        DRAWDOWN_TABLE: `${algoInfoApi}/get-drawdown-table`,
        ROLLING_RETURN: `${algoInfoApi}/get-rolling-returns`,
        HISTORICAL_GRAPH: `${algoInfoApi}/historical-graph`,
        TRADE_LOG_TABLE: `${algoInfoApi}/trade-log`,
        RELATED_CONST_STOCK: `${algoInfoApi}/related-constituent-stock`,
        ROLLING_RETURNS_GRAPH: `${algoInfoApi}/get-rolling-returns-graph`,
        INFORMATION_TOP: `${algoInfoApi}/information-top`,
    },
    POST: {
    }
}
const ALGOMART = {
    GET: {
        ALGO_MART_GRAPH: `${algoMartApi}/algo-mart-graph`
    },
    POST: {
    }
}

const AUTH = {
    SOCIAL_LOGIN: `${authApi}/social-login`,
}


export {
    PORTFOLIO,
    ALGOINFO,
    AUTH,
    ALGOMART
}