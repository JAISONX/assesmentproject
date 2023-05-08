import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
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

const Dashb = () => {
    var [course,setcourse]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response);
            setcourse(response.data)
        })
     },[]); 
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>USERID</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">TITLE&nbsp;</StyledTableCell>
            <StyledTableCell align="right">BODY&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
         {/* <TableBody>
          {course.map((value,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {value.courseName}
              </StyledTableCell>
              <StyledTableCell align="right">{value.courseDes}</StyledTableCell>
              <StyledTableCell align="right">{value.courseDuration}</StyledTableCell>
              <StyledTableCell align="right">{value.courseStartDate}</StyledTableCell>
              <StyledTableCell align="right">{}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>  */}
      </Table>
    </TableContainer>
    </div>
  )
}

export default Dashb
