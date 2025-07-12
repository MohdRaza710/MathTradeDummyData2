import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Graph from './Graph'
import ComositeGraph from '../Algorithum-Info/CompositeGraph'
import CompositeTable from '../Algorithum-Info/CompositeTable1'
import OverviewTable from '../Algorithum-Info/OverviewTable'
import WatchList from '../WatchList/WatchList'
import Search from './Search'
import SearchETF from './SearchETF'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#333333',
        color: theme.palette.common.white,
        fontSize: 14,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        fontWeight: 'bold'
    }
}))

const Portfolio = (props) => {
    const [showUltimate, setShowUltimate] = useState(false)
    const [showEndowment, setShowEndowment] = useState(false)
    const [showHarryPortfolio, setShowHarryPortfolio] = useState(false)
    const [show5000, setShow5000] = useState(false)
    const [showSDW, setShowSDW] = useState(false)
    const [showSLV, setShowSLV] = useState(false)
    const [value, setValue] = useState("")
    const [valueETF, setValueETF] = useState("")



    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        textAlign: 'left',
        '&:last-child td, &:last-child th': {
            border: 0
        }
    }))

    let tableObj = [
        {
            row: 'Ultimate Buy and hold strategy',
            state: showUltimate,
            set: setShowUltimate
        },
        {
            row: 'Ivy League Endowment',
            state: showEndowment,
            set: setShowEndowment
        },
        {
            row: `Harry Browne's Permanent Portfolio`,
            state: showHarryPortfolio,
            set: setShowHarryPortfolio
        },
        {
            row: `Harry Browne's Permanent Portfolio`,
            state: showHarryPortfolio,
            set: setShowHarryPortfolio
        },


    ]
    let tableObjETF = [
        {
            row: '5000',
            state: show5000,
            set: setShow5000
        },
        {
            row: 'SDW',
            state: showSDW,
            set: setShowSDW
        },
        {
            row: `SLV`,
            state: showSLV,
            set: setShowSLV
        }
    ]
    return (
        <div className='overviewAlgo-portfolio'>
            <div className='Algo-new-bar-portfolio-new' >
                <div className='overview-portfolio-New'>
                    <b> Performance</b>
                </div>
            </div>
            <div className='historical-graph-tables-chart-portfolio'>
                <div className='portfolio-garph '>
                    <Graph
                        showUltimate={showUltimate}
                        showEndowment={showEndowment}
                        showHarryPortfolio={showHarryPortfolio}
                        show5000={show5000}
                        showSDW={showSDW}
                        showSLV={showSLV}
                        {...props}
                    />
                </div>
                <div className='historical-graph-tables'>

                    <TableContainer className='historical_tables Extra_margin scroll_class' sx={{
                        ['&.MuiTableContainer-root']: {
                            borderRadius: 3,
                            boxShadow: 3,
                            minHeight: 220
                        }
                    }} component={Paper}>
                        <Table stickyHeader sx={{ minWidth: 300, minHeight: 50 }} aria-label='customized table'>
                            <TableHead>
                                <TableRow sx={{
                                    borderTopRightRadius: 20,
                                    borderTopLeftRadius: 20
                                }}>
                                    <StyledTableCell collspan={1} style={{ width: '30%' }} >Algorithm Comparision</StyledTableCell>
                                    <StyledTableCell style={{ padding: '16px 4px' }} align='right'><Search style={{ width: '100%' }} setSearchPortAlgo={(e) => { setValue(e) }} /></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableObj?.filter((val) => {
                                    if (value === "") {
                                        return val;
                                    } else if (val?.row?.toLowerCase()?.includes(value?.toLowerCase())) {
                                        if (Object.keys(val).length > 1) {
                                            return val
                                        }

                                    }
                                })?.map((v, i) => {
                                    return (
                                        <StyledTableRow>
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
                                        </StyledTableRow>)
                                })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer className='historical_tables scroll_class' sx={{
                        marginTop: 0,
                        ['&.MuiTableContainer-root']: {
                            borderRadius: 3,
                            boxShadow: 3,
                            minHeight: 220
                        }
                    }} component={Paper}>
                        <Table stickyHeader sx={{ minWidth: 300, minHeight: 50 }} aria-label='customized table'>
                            <TableHead >
                                <TableRow>
                                    <StyledTableCell collspan={1} style={{ width: '30%' }}>+ETF</StyledTableCell>
                                    <StyledTableCell style={{ padding: '16px 4px' }} align='right'><SearchETF sx={{ width: '100%' }} setSearchPortETF={(e) => { setValueETF(e) }} /></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {tableObjETF?.filter((val) => {
                                    if (valueETF === "") {
                                        return val;
                                    } else if (val?.row?.toLowerCase()?.includes(valueETF?.toLowerCase())) {
                                        if (Object.keys(val).length > 1) {
                                            return val
                                        }

                                    }
                                })?.map((v, i) => {
                                    return (
                                        <StyledTableRow>
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
                                        </StyledTableRow>)
                                })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div>
                <OverviewTable />
            </div>
            <div className='overview-portfolio-New' style={{ marginTop: '20px' }}>
                <b> Composite </b>
            </div>
            <div className='portfolio-garph' >
                <ComositeGraph />
            </div>

            <div>
                <CompositeTable />
            </div>

            <div style={{ marginTop: 20 }} className='watch-list-page'>
                <WatchList />
            </div>
        </div >
    )
}

export default Portfolio