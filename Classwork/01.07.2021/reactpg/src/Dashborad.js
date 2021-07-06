import React from "react";
import { Welcom } from "./Welcom";
import { Counter } from "./Counter";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
            email: '',
            password: '',
            login: false
        }
    }
    increaseCounter = () => {
        this.setState({ counterValue: this.state.counterValue + 1 });
    }
    decreaseCounter = () => {
        this.setState({ counterValue: this.state.counterValue - 1 });
    }
    login = () => {
        if (this.state.email && this.state.password) {
            console.log(this.state.email);
            console.log(this.state.password);
            this.state.login = true;
        } else {
            console.log("Перевірте свій email або password!");
        }
    }
    chackEmail = (event) => {
        let valueEmail = event.target.value;
        if (valueEmail.length < 5) {
            event.target.style.outline = "1px solid red";
        } else {
            event.target.style.outline = "1px solid green";
            this.setState({ email: this.state.email = valueEmail });
        }
    }
    chackPassword = (event) => {
        let valuePassword = event.target.value;
        if (valuePassword.length < 8) {
            event.target.style.outline = "1px solid red";
        } else {
            event.target.style.outline = "1px solid green";
            this.setState({ password: this.state.password = valuePassword });
        }
    }
    render() {
        return (
            // <Welcom name={this.getUser()} nightMode={false} />
            <Counter
                value={this.state.counterValue}
                onIncrease={this.increaseCounter}
                onDecrease={this.decreaseCounter}
                onLogin={this.login}
                onChackEmail={this.chackEmail}
                onChackPassword={this.chackPassword}
                welcom={this.state.welcom}
            />
        );
    }
    getUser() {
        return `${this.props.user.fistName} ${this.props.user.lastName}`;
    }
}

// function Dashboard() {
//     return (
//         <h1>Dashboard</h1>
//     );
// }

// export { Dashboard };