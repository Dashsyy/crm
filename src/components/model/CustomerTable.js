import { Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import React, { useState } from 'react';

const columns = [
    {
        title: 'CustomerId', field: 'id'
    },
    {
        title: 'Name', field: 'title'
    },
    {
        title: 'Telephone', field: 'price'
    },
    {
        title: 'Email', field: 'description'
    },
    {
        title: 'Last visited', field: 'category'
    },
    {
        title: 'Total purchased', field: 'totalpurchased'
    },
]

export default function CustomerTable() {
    const [users, setUsers] = useState([]);
    const [hasError, setHasError] = useState(false)

    const usersHandler = () => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(response => response.json())
            .then(data => setUsers(data),console.log(users))
            .catch(err => setHasError(true));

    }
    const data = users.map((results) => results)
    return (
        <>

            {/* {users.map(s => <div><ul><li>{s.title}</li></ul></div>)} */}
            <h1><Button onClick={usersHandler}>Click Me</Button></h1>
            <MaterialTable title="Customer Table" data={data} columns={columns} />
        </>
    );


}
