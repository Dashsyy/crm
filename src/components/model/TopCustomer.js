import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        minWidth: 250
    },
    background: {
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
});
function createData(name, title, fat, carbs, protein) {
    return { name, title, fat, carbs, protein };
}

export default function SimpleTable() {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    // fetch('https://fakestoreapi.com/products?limit=20')
    //     .then(response => response.json())
    //     .then(data => setUsers(data))

    const rows = [
        { id:1,firstName: 'Jon', tier: 'Sliver' },
        { id:2,firstName: 'Cersei', tier: 'Sliver' },
        { id:3,firstName: 'Jaime', tier: 'Sliver' },
        { id:4,firstName: 'Arya', tier: 'Gold' },
        { id:5,firstName: 'Daenerys', tier: 'Sliver' },
        { id:6,firstName: 'Heng', tier: 'Gold' },
        { id:7,firstName: 'Ferrara', tier: 'Sliver' },
        { id:8,firstName: 'Rossini', tier: 'Sliver' },
        { id:9,firstName: 'Harvey', tier: 'Gold' },
        { id:10,firstName: 'Heng', tier: 'Gold' },
        { id:11,firstName: 'Ferrara', tier: 'Sliver' },
        { id:12,firstName: 'Rossini', tier: 'Sliver' },
        { id:13,firstName: 'Harvey', tier: 'Gold' },
        { id:14,firstName: 'Jaime', tier: 'Sliver' },
        { id:15,firstName: 'Arya', tier: 'Gold' },
        { id:16,firstName: 'Daenerys', tier: 'Sliver' },
        { id:17,firstName: 'Heng', tier: 'Gold' },
        { id:18,firstName: 'Ferrara', tier: 'Sliver' },
        { id:19,firstName: 'Rossini', tier: 'Sliver' },
        { id:20,firstName: 'Harvey', tier: 'Gold' },
        { id:21,firstName: 'Heng', tier: 'Gold' },
        { id:22,firstName: 'Ferrara', tier: 'Sliver' },
    ];
    // const rows = users.map(s => createData(s.title, s.id),);

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.background}>Name</TableCell>
                            <TableCell align="right">Tier</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell align="right">{row.tier}</TableCell>
                                </TableRow>
                            ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={1} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5,10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </TableContainer>
        </>
    );
}
