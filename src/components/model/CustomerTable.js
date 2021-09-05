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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import AddCustomer from "./AddCustomer";
const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    background: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
});
function createData(id, name, phone, email, totalpurchase, registereddate, tier) {
    return { id, name, phone, email, totalpurchase, registereddate, tier };
}

export default function SimpleTable() {
    const classes = useStyles();
    const [users, setUsers] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    //axios here
    fetch('http://localhost:5000/api/v1/customer')
        .then(response => response.json())
        .then(data => data.customers)
        .then(datas => setUsers(datas))

    const rows = users.map(s => createData(s._id, s.name.firstname + s.name.lastname, s.phone, s.email, s.totalpurchase,s.date.slice(0,10), s.tier),);

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const history = useHistory({ forceRefresh: true });
    function handleClick() {
        history.push("/AddCustomer")
    }
    return (
        <><button onClick={handleClick}>Add new Customer</button>
            <Route path="/AddCustomer" component={AddCustomer} />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customer table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell >Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Total Purchase</TableCell>
                            <TableCell align="right">Date Joined</TableCell>
                            <TableCell align="right">Tier</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((data, index) => (
                                <TableRow key={data.id} >
                                    <TableCell component="th" scope="row">{data.name}</TableCell>
                                    <TableCell align="right">{data.phone}</TableCell>
                                    <TableCell align="right">{data.email}</TableCell>
                                    <TableCell align="right">{data.totalpurchase}</TableCell>
                                    <TableCell align="right">{data.registereddate}</TableCell>
                                    <TableCell align="right">{data.tier}</TableCell>
                                    <TableCell align="right" >
                                        <button onClick={() => { alert(data.id) }}>Edit</button>
                                        <button onClick={() => { alert(data.id) }}>Delete</button>
                                    </TableCell>
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
                    rowsPerPageOptions={[5, 10, 25]}
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
