import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import constituentData from '../../dummyData/constituentData.json'

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

const PrincipleTable2 = () => {
    const principalTable2 = constituentData
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{fontSize: '1em'}}>Name</StyledTableCell>
                        <StyledTableCell sx={{fontSize: '1em'}} align='right'>Price</StyledTableCell>
                        <StyledTableCell sx={{fontSize: '1em'}} align='right'>Ticker</StyledTableCell>
                        <StyledTableCell sx={{fontSize: '1em'}} align='right'>Change</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {principalTable2.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.ticker}</StyledTableCell>
                            <StyledTableCell align="right">{row.change}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )


}



export default PrincipleTable2