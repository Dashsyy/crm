import React from 'react'
import Dashboard from './Dashboard'
import Navigations from './Navigations'
import CustomerTable from './CustomerTable'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
    return (
        <div>
            {/* <Dashboard /> */}
            <Navigations />
            {/* <ContactTable/> */}
        </div>
    )
}

export default App
