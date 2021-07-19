import { Divider, Drawer } from '@material-ui/core'
import React from 'react'
import Chart from './components/charttype/Chart'
import ClickEvents from './components/example/ClickEvents'
import DoughnutChart from './components/example/Doughnut'
import Dynamic from './components/example/Dynamic'
import GroupedBar from './components/example/GroupedBar'
import Horizontalbar from './components/example/HorizontalBar'
import Line from './components/example/Line'
import MultiAxisLine from './components/example/MultiAxisLine'
import MultiType from './components/example/MultiType' 
import Pie from './components/example/Pie' 
import Polar from './components/example/Polar' 
import Radar from './components/example/Radar' 
import Scatter from './components/example/Scatter' 
import StackedBar from './components/example/StackedBar' 
import VerticalBar from './components/example/VerticalBar' 
import CustomerTable from './components/model/CustomerTable'
import Navigations from './pages/Navigations'
import './index.css'
function App() {
    return (
        <div>
            {/* <Dashboard /> */}
            <Navigations />
            {/* <ContactTable/> */}
            
            {/* <Chart/> */}
            {/* <div className="flexbox item">
            <h1>-------------------------------</h1>
            <h1>Chart that going to use </h1>
            <h1>-------------------------------</h1>
            <DoughnutChart/>
            <Horizontalbar/>
            <GroupedBar/>
            <Divider/>
            <Line/>
            <VerticalBar/>
            <h1>-------------------------------</h1>
            <h1>Chart that not going to use </h1>
            <h1>-------------------------------</h1>
            <ClickEvents/>
            <Dynamic/>
            <MultiAxisLine/>
            <MultiType/>
            <MultiType/>
            <Pie/>
            <Polar/>
            <Radar/>
            <Scatter/>

            <h1>Chart testing</h1>
            <StackedBar/>
            </div> */}
            

            {/* <CustomerTable/> */}
            
            
        </div>
    )
}

export default App
