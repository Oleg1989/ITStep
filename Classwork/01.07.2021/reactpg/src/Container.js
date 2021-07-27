import { Main } from "./Main";
import { AddItem } from "./AddItem";
import { Dashboard } from "./Dashborad";
import { Clock } from './Clock';

export function Container() {
    return <div className="container">
        {/* <Main />
        <AddItem /> */}
        {/* <Dashboard /> */}
        <Clock />
    </div>
}