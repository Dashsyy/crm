
import React from 'react'
import './index.css'
import Navigations from './pages/Navigations'
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useHistory,
} from "react-router-dom";
import Dashboards from './pages/Dashboards';

function App() {
        const history = useHistory({ forceRefresh: true });
        function handleClick() {
                history.push("/Dashboard")
        }
        return (
                <div>
                        {/* <button onClick={handleClick}>Add new Customer</button>
                        <Route path="/Dashboard" component={Dashboards}/> */}
                        <Router>

                                <Navigations />
                        </Router>

                </div>
        )
}
export default App
