import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(name, NLV, YTDSharpe, fiveYrSharpe, YTDReturn, fiveYrReturn, MarginRatio) {
  return { name, Algorithum, NLV, YTDSharpe, fiveYrSharpe, YTDReturn, fiveYrReturn, MarginRatio };
}

const rows = [
  createData('Ultimate Buy and Hold Strategy', 972894.21, 1.170, 0.925, 1.256, 0.87),
  createData('Ultimate Buy and Hold Strategy', 972894.21, 1.170, 0.925, 1.256, 0.87),
  createData('Ultimate Buy and Hold Strategy', 972894.21, 1.170, 0.925, 1.256, 0.87),
  createData('Ultimate Buy and Hold Strategy', 972894.21, 1.170, 0.925, 1.256, 0.87),
  createData('Ultimate Buy and Hold Strategy', 972894.21, 1.170, 0.925, 1.256, 0.87),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bottom loser</StyledTableCell>
            <StyledTableCell align="right">Algorithum</StyledTableCell>
            <StyledTableCell align="right">NLV</StyledTableCell>
            <StyledTableCell align="right">YTD Sharpe</StyledTableCell>
            <StyledTableCell align="right">5yr Sharpe</StyledTableCell>
            <StyledTableCell align="right">YTD Return</StyledTableCell>
            <StyledTableCell align="right">5yr Return</StyledTableCell>
            <StyledTableCell align="right">Margin Ratio</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Algorithum}</StyledTableCell>
              <StyledTableCell align="right">{row.NLV}</StyledTableCell>
              <StyledTableCell align="right">{row.YTDSharpe}</StyledTableCell>
              <StyledTableCell align="right">{row.fiveYrSharpe}</StyledTableCell>
              <StyledTableCell align="right">{row.YTDReturn}</StyledTableCell>
              <StyledTableCell align="right">{row.fiveYrReturn}</StyledTableCell>
              <StyledTableCell align="right">{row.MarginRatio}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
