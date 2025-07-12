import { useEffect, useState, useRef, use } from 'react'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useSelector } from 'react-redux'
import AlgotradingCard from '../Algorithum/AlgoTradingCards'
import BottomLoserTable from './BottomLoser'
import OverviewPortfolioGraph from './OverviewPortfolioGraph'
import TopGainerTable from './TopGainerTable'
import Search from './Search'
import MathTrade from './MathTrade'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#333333',
        color: theme.palette.common.white,
        fontSize: 19,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 12,
        fontWeight: 'bold'
    },
}))

const OverviewPortfolio = (props) => {
    const { martPage } = props
    let [widthm, setwidth] = useState(window.innerWidth <= 340 ? window.innerWidth - 91 : window.innerWidth <= 500 ? window.innerWidth - 90 : window.innerWidth - 137)
    const [showUltimate, setShowUltimate] = useState(false)
    const [showEndowent, setShowEndowent] = useState(false)
    const [showHarryPortfolio, setShowharryPortfolio] = useState(false)
    const [myState, setMyState] = useState(useSelector((state) => state?.userReducer?.historicalGraph || []))
    const [value, setValue] = useState("")
    const titleRef = useRef()

    let tableObj = [
        {
            row: 'ultimate Buy and hold Strategy',
            state: showUltimate,
            set: setShowUltimate
        },
        {
            row: 'Ivy League Endowent',
            state: showEndowent,
            set: setShowEndowent
        },
        {
            row: `Harry Browne's Permenent Portfolio`,
            state: showHarryPortfolio,
            set: setShowharryPortfolio
        }
    ]

    const StyledTableRow = styled(TableRow)(({ theme }) => ({

        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }))


    useEffect(() => {
        window.addEventListener('resize', setSiderMargin)
        setSiderMargin()
    }, [])

    const setSiderMargin = () => {
        setwidth(window.innerWidth <= 340 ? window.innerWidth - 91 : window.innerWidth <= 500 ? window.innerWidth - 90 : window.innerWidth - 137)
    }

    return (
        <>
            {!martPage ?
                <>
                    <div className='overviewAlgo-portfolio'>
                        <div className='Algo-new-bar-portfolio' style={{ borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }}>
                            <div className='overview-portfolio-stock'>
                                <b>Algorithum Performance Overview</b>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className='middle-portfolio-div'>
                            <div className='portfolio-graph'>
                                <OverviewPortfolioGraph
                                    showUltimate={showUltimate}
                                    showEndowent={showEndowent}
                                    showHarryPortfolio={showHarryPortfolio}
                                    {...props}
                                />
                            </div>

                            <div className='portfolio-right-table'>
                                <TableContainer className='scroll_class' sx={{
                                    marginTop: 0,
                                    ['&.MuiTableContainer-root']: {
                                        borderRadius: 3,
                                        boxShadow: 3
                                    }
                                    , minWidth: 100, maxHeight: 370
                                }} component={Paper}>
                                    <Table stickyHeader sx={{ minWidth: 100, maxHeight: 100 }} aria-label='customized table'>
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell colSpan={30} sx={{ width: '99%' }}><Search sx={{ width: '99%' }} setSearchMart={(e) => { setValue(e) }} serchBarMart={value} /></StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {tableObj?.filter((val) => {
                                                if (value === "") {
                                                    return val;
                                                } else if (val?.row?.toLowerCase()?.includes(value?.toLowerCase())) {
                                                    if (Object.keys(val)?.length > 1) {
                                                        return val
                                                    }
                                                }
                                            })?.map((v, i) => {
                                                return (
                                                    <StyledTableRow key={i}>
                                                        <StyledTableCell component='td' scope='row'>
                                                            {v?.row}
                                                        </StyledTableCell>
                                                        <StyledTableCell align='right'>
                                                            <Checkbox 
                                                            color='primary'
                                                            checked={v.state}
                                                            onChange={(e) => v.set(e?.target?.checked)}
                                                            />
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>

                        <div className='portfolio-table-main-div'>
                            
                            <div className='portfolio-top-gainer'>
                                <div className='portfolio-graph-header'>
                                    Top Gainer
                                </div>
                                <TopGainerTable />
                            </div>
                            <div className='portfolio-bottom-loser'>
                                <div className='portfolio-graph-header'>
                                    Bottom Loser
                                </div>
                                <BottomLoserTable />
                            </div>
                        </div>

                        <div>
                            <AlgotradingCard myState={myState} setMyState={setMyState} titleRef={titleRef} {...props} />
                        </div>
                        <div>
                            <MathTrade titleRef={titleRef} {...props} />
                        </div>
                    </div>
                </> :
                <>
                    
                </>
    }
        </>
    )


}

export default OverviewPortfolio