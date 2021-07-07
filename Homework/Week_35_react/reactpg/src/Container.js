import { Main } from "./Main";
import { AddItem } from "./AddItem";

export function Container() {
    return <div className="container-fluid">
        <div className="row">
            <div className="col s8">
                <Main />
            </div>
            <div className="col s4">
                <AddItem />
            </div>
        </div>
    </div>
}