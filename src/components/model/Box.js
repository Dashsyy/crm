import React from 'react'
import '../../index.css'
import PieSales from '../chart/PieSales'
import Line from '../chart/Line'
import GroupedBar from '../chart/GroupedBar'
import TopCustomer from '../model/TopCustomer'
function Box() {
    return (
        <div className="Container">
            <div class="flexbox">
                <div class="item">
                    <div class="content">
                        <PieSales />
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <Line/>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <GroupedBar/>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
<TopCustomer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box
