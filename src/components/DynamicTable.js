import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const DynamicTable = ({ rows, columns }) => {
    console.log(rows)
    return (
        <TableContainer component={Paper} sx={{
            border: '3px solid red',
            p: 2.5,
        }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map(column => (<TableCell key={column.field} align="right">{column.headerName}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, rowIndex) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {columns.map((item, columnIndex) => (<TableCell key={rowIndex + columnIndex + item.field} align="right">{row[item.field]}</TableCell>))}
                            {/* <TableCell align="right">{row.user_id}</TableCell>
                            <TableCell align="right">{row.first_name}</TableCell>
                            <TableCell align="right">{row.last_name}</TableCell>
                            <TableCell align="right">{row.phone_number}</TableCell>
                            <TableCell align="right">{row.name}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
