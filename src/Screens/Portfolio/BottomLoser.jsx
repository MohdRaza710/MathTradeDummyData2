import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, nlv, ytdSharpe, fiveYearSharpe, ytdReturn, fiveYearReturn, marginRatio) {
    return { name, nlv, ytdSharpe, fiveYearSharpe, ytdReturn, fiveYearReturn, marginRatio }
}

const rows = [
    createData('Ultimate Buy and Hold Strategy', 972894.21, 1.953, 1.170, 0.925, 1.256, 0.87),
    createData('Ultimate Buy and Hold Strategy', 972894.21, 1.953, 1.170, 0.925, 1.256, 0.87),
    createData('Ultimate Buy and Hold Strategy', 972894.21, 1.953, 1.170, 0.925, 1.256, 0.87),
    createData('Ultimate Buy and Hold Strategy', 972894.21, 1.953, 1.170, 0.925, 1.256, 0.87)
]


const BottomLoser = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label='customized-table'>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Algorithum</StyledTableCell>
                        <StyledTableCell align='right'>NLV</StyledTableCell>
                        <StyledTableCell align='right'>YTD Sharpe</StyledTableCell>
                        <StyledTableCell align='right'>5yr Sharpe</StyledTableCell>
                        <StyledTableCell align='right'>YTD Return</StyledTableCell>
                        <StyledTableCell align='right'>5yr return</StyledTableCell>
                        <StyledTableCell align='right'>Margin Ratio</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                        <StyledTableRow>
                            <StyledTableCell component="th" scope='row'>
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align='right'>{row.nlv}</StyledTableCell>
                            <StyledTableCell align='right'>{row.ytdSharpe}</StyledTableCell>
                            <StyledTableCell align='right'>{row.fiveYearSharpe}</StyledTableCell>
                            <StyledTableCell align='right'>{row.ytdReturn}</StyledTableCell>
                            <StyledTableCell align='right'>{row.fiveYearReturn}</StyledTableCell>
                            <StyledTableCell align='right'>{row.marginRatio}</StyledTableCell>
                        </StyledTableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BottomLoser;