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
            data: props.dataTest
        }
    }
    sort = (event) => {
        this.setState({ data: sortBy(this.state.data, [event.target.id]) });
    }
    getName = (event) => {
        this.setState({ name: event.target.value });
    }
    findByName = () => {
        this.setState({ data: [find(this.state.data, { 'title': this.state.name })] });
    }
    render() {
        return (
            <>
                <Search onFindByName={this.findByName} onGetName={this.getName} />
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
