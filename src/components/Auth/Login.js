import React, { Component } from 'react'
import { Route, Router, withRouter } from 'react-router-dom';
import Dashboards from '../../pages/Dashboards';

var selectedTab;
export default class Login extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        selectedTab = 0;
    }
    handleClick(value) {
        selectedTab = value;
        // console.log(selectedTab);
        this.props.history.push('/Dashboards');
        // console.log(this.props);
    }

    render() {
        var _this = this;
        return (
            <div>
                <Route exact path="/" render={(props) => <Dashboards {...props} handleClick={_this.handleClick} />} />
                <Route path="/Dashboards" component={Dashboards} curTab={selectedTab} />
            </div>
        )
    }
}
