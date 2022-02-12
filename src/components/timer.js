import React from 'react';
import styles from './timer.scss';

class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.formatTime = this.formatTime.bind(this);
    }
    

    formatTime(time)  {
        const secs = Math.floor(time / 1000) % 60;
        const mins = Math.floor(time / 1000 / 60) % 60;
        const hrs = Math.floor(time / (1000 * 60 * 60)) % 24;
        return `${hrs}:${mins}:${secs}`
    }

    // componentDidMount() {
    //     document.getElementById('count-value').innerText = parseFloat(this.props.session).toFixed(2).replace('.', ':');
    // }

    // componentDidUpdate() {
    //     document.getElementById('count-value').innerText = parseFloat(this.props.session).toFixed(2);
    // }

    render() {
        return (
            <div className = 'timer'>
                <div className = 'upper-panel'>
                    <div className = 'break-panel'>
                        <h2>Cozy Length</h2>
                        <button className = 'break-panel-decrement' value = 'break' onClick = {this.props.handleDecrement}>
                            <i className="fa-solid fa-arrow-down"></i>
                        </button>
                        <p className = 'break-panel-value'>{this.props.break}</p>
                        <button className = 'break-panel-increment' value = 'break' onClick = {this.props.handleIncrement}>
                            <i className="fa-solid fa-arrow-up"></i>
                        </button>
                    </div>
                    <div className = 'work-panel'>
                        <h2>Work Length</h2>
                        <button className = 'work-panel-decrement' value = 'work' onClick = {this.props.handleDecrement}>
                            <i className="fa-solid fa-arrow-down"></i>
                        </button>
                        <p className = 'work-panel-value'>{this.props.work}</p>
                        <button className = 'work-panel-increment' value = 'work' onClick = {this.props.handleIncrement}>
                            <i className="fa-solid fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
                <div className = 'count-down'>
                    <p className = 'count-down-title'>Session</p>
                    <p className = 'count-down-value' id = 'count-value'>{this.formatTime(this.props.session)}</p>
                </div>
                <div className = 'lower-panel'>
                    <button onClick = {this.props.handleStart}>
                        <i className="fa-solid fa-play"></i>
                    </button>
                    <button onClick = {this.props.handlePause}>
                        <i className="fa-solid fa-pause"></i>
                    </button>
                    <button onClick = {this.props.handleReset}>
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Timer;