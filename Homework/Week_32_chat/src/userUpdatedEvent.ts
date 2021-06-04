import { IEvent } from "./interface/ievent";
import { IObserver } from "./interface/iobserver";

export class UsersUpdatedEvent implements IEvent {
    private _subscribers: IObserver[] = [];
    trigger() {
        this._subscribers.forEach(s => s.notify());
    }
    subscribe(observer: IObserver) {
        this._subscribers.push(observer);
    }
}