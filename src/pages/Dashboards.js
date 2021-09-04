import React, { Component } from 'react'
import Box from '../components/model/Box'

//logo
class Dashboards extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div className="Container">
                    <div class="flexbox-nowrap">
                        <div class="item-nowrap">
                            <div class="content">
                                <p>Today Profits</p>
                                <h1>$ 500</h1>
                            </div>
                        </div>
                        <div class="item-nowrap">
                            <div class="content">
                            <p>Today Expense</p>
                                <h1>$ 56</h1>
                            </div>
                        </div>
                        <div class="item-nowrap">
                            <div class="content">
                            <p>Customer in September</p>
                                <h1>12</h1>
                            </div>
                        </div>
                        <div class="item-nowrap">
                            <div class="content">
                            <p>Popular Item</p>
                                <h1>Jean</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <Box />
            </div>
        )
    }
}

export default Dashboards
