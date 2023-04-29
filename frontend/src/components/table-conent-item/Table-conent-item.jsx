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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}



export default function CustomizedTables({command}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:'415px'}} aria-label="customized table">
        <TableBody>
          {command.map((row) => (
          
            <StyledTableRow key={row.id}>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right" >
                  img
              </StyledTableCell>
              <StyledTableCell  >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.command1}</StyledTableCell>
              <StyledTableCell align="right">{row.command2}</StyledTableCell>
            </StyledTableRow>
         
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
