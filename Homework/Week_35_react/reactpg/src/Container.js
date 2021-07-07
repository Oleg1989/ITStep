import { Main } from "./Main";
import { AddItem } from "./AddItem";

export function Container() {
    return <div className="container">
        <Main />
        <AddItem />
    </div>
}