import React, { Component } from 'react'
import DoughnutChart from '../components/chart/Doughnut'

class Reports extends Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div class="flexbox">
                        <div class="item">
                            <div class="content">
                            <DoughnutChart/>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <p>Profit</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <p>Total customer</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="content">
                                <p>Top Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Reports