import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import { Grid } from '@material-ui/core';


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

function Sumit() {
    const url = "http://localhost:5000/api/v1/customer"
    const [data, setData] = useState({
        "gender": "",
        "title": "",
        "firstname": "",
        "lastname": "",
        "email": "",
        "tier": ""
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            gender: data.gender,
            title: data.title,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            tier: data.tier,
        }).then(res => {
            console.log(res.data)
        })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)

    }

    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
            >
                <form noValidate autoComplete="off" onSubmit={(e) => submit(e)}>
                    <h2>Complete the form below</h2>
                    <div className={classes.align}>
                        <TextField onChange={(e) => handle(e)} id="gender" value={data.gender} type="text" label="Gender" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="title" value={data.title} type="text" label="Title" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="firstname" value={data.firstname} type="text" label="First name" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="lastname" value={data.lastname} type="text" label="Last name" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="email" value={data.email} type="text" label="Email" variant="outlined" />
                        <TextField onChange={(e) => handle(e)} id="tier" value={data.tier} type="text" label="Tier" variant="outlined" />
                        <button>Submit</button>
                    </div>

                </form>
            </Grid>

        </div>
    )
}

export default Sumit
