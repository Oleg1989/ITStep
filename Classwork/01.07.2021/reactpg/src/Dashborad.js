import React from "react";
import { Welcom } from "./Welcom";

export class Dashboard extends React.Component {
    render() {
        return (
            <Welcom name={this.getUser()} nightMode={false} />
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