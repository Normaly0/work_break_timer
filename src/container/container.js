import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actions';
import styles from './container.scss';
import Timer from '../components/timer';

class Container extends React.Component {
    render() {
        return (
            <div className = 'container'>
                <h1 className = 'title'>Work/Cozy Timer</h1>
                <Timer
                break = {this.props.break}
                work = {this.props.work}
                session = {this.props.session}
                handleIncrement = {this.props.handleIncrement}
                handleDecrement = {this.props.handleDecrement}
                handleStart = {this.props.handleStart}
                handlePause = {this.props.handlePause}
                handleReset = {this.props.handleReset}
                />
                <p className = 'credit'>Coded by Normaly</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, actionCreators)(Container);