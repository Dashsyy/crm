
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
function App() {
        return (
                <div>
                        <Router>
                                <Navigations />
                        </Router>

                </div>
        )
}
export default App
