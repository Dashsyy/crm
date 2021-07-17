import MaterialTable from 'material-table';
import React from 'react';


const data = [
    {
        CustomerID: 1,
        name: 'Heng Sunhour',
        telephone: '012 358 051',
        email: 'hengsunhour@yahoo.com',
        lastvisited: '17 July 2021',
        totalpurchased: '$125'
    },
    {
        CustomerID: 2,
        name: 'Puppy',
        telephone: '012 358 051',
        email: 'hengsunhour@yahoo.com',
        lastvisited: '17 July 2021',
        totalpurchased: '$5'
    }
]

const columns = [
    {
        title: 'CustomerId', field: 'CustomerID'
    },
    {
        title: 'Name', field: 'name'
    },
    {
        title: 'Telephone', field: 'telephone'
    },
    {
        title: 'Email', field: 'email'
    },
    {
        title: 'Last visited', field: 'lastvisited'
    },
    {
        title: 'Total purchased', field: 'totalpurchased'
    },
]

export default function CustomerTable() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => console.log(data.results[0].name));
    return (
        <>
            <MaterialTable title="Customer Table" data={data} columns={columns} />
        </>
    );


}
