import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import { Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    useLocation,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import CustomerTable from './CustomerTable';
import {IdConsumer} from './appContext';
import Text from './Text'
const useStyles = makeStyles((theme) => ({
    root: {
        // margin: theme.spacing(2),
    },
    align: {
        '& > *': {
            marginTop: '10px',
            width: '300px',

        },
        width: '250px',

    },
}));

const UpdateCustomer = props =>{
    const url = "http://localhost:5000/api/v1/customer"
    const [data, setData] = useState({
        '_id': "",
        "gender": "",
        "title": "",
        "firstname": "",
        "lastname": "",
        "phone": "",
        "email": "",
        "totalpurchase": "",
        "tier": ""
    })
    var resultsId;


        const location = useLocation();

        React.useEffect(() => {
           console.log(location.state.currentId);
        }, [location]);


    function submit(e) {
        e.preventDefault();
        Axios.patch(url, {
            _id: data.id,
            gender: data.gender,
            title: data.title,
            firstname: data.firstname,
            lastname: data.lastname,
            dob: data.dob,
            email: data.email,
            totalpurchase: data.totalpurchase,
            tier: data.tier,
        }).then(res => {
            console.log(res.data)
        })
    }
    const history = useHistory({ forceRefresh: true });
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)

    }
    function handleCancelClick() {
        history.push("/Customers")
    }
    const classes = useStyles();
    return (
        <>
            {location.state.currentId}
            {/* <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <form noValidate autoComplete="off" onSubmit={(e) => submit(e)}>
                    <h2>Update Customer Info{props.name} Text</h2>
                    <div className={classes.align}>
                        <TextField onChange={(e) => handle(e)} id="gender" value={data.gender} type="text" label="Gender" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="title" value={data.title} type="text" label="Title" variant="outlined" />
                        <TextField disabled onChange={(e) => handle(e)} id="firstname" value={data.firstname} type="text" label="First name" variant="outlined" />
                        <TextField disabled onChange={(e) => handle(e)} id="lastname" value={data.lastname} type="text" label="Last name" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="phone" value={data.phone} type="number" label="Phone Number" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="email" value={data.email} type="text" label="Email" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="totalpurchase" value={data.totalpurchase} type="text" label="Total Purchase" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="tier" value={data.tier} type="text" label="Tier" variant="outlined" />
                        <button>Submit</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </div>

                </form>
            </Grid> */}

        </>
    )
}

export default UpdateCustomer
