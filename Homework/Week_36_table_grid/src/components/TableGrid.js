import React from "react";
import { Search } from './Search';
import { ThId } from "./ThId";
import { ThName } from "./ThName";
import { ThDate } from "./ThDate";
import { Tbody } from "./TableBody";
import { sortBy, find } from 'lodash';

export class TableGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.dataTest,
        }
    }
    sort = (event) => {
        this.setState({ data: sortBy(this.state.data, [event.target.id]) });
    }
    // getName = (event) => {
    //     console.log(event.target.value);

    //     this.setState({ name: event.target.value });
    // }
    findByName = (event) => {
        this.setState({ data: [find(this.state.data, { 'title': event.target.value })] });
    }
    render() {
        return (
            <>
                <Search onFindByName={this.findByName} />
                <table>
                    <thead>
                        <tr>
                            <ThId onSort={this.sort} />
                            <ThName onSort={this.sort} />
                            <ThDate onSort={this.sort} />
                        </tr>
                    </thead>
                    <Tbody data={this.state.data} />
                </table>
            </>
        );
    }
}
