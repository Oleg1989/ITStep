import React from 'react';

export class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }
    tick = () => {
        this.setState({ date: new Date() });
    }
    componentDidMount = () => {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.date !== this.state.date) {
            return true;
        }
        return false;

    }
    render() {
        return <div>It's {this.state.date.toLocaleString()}.</div>
    }
}