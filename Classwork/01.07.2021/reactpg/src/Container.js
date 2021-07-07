import { Main } from "./Main";
import { AddItem } from "./AddItem";
import { Dashboard } from "./Dashborad";

export function Container() {
    return <div className="container">
        {/* <Main />
        <AddItem /> */}
        <Dashboard />
    </div>
}