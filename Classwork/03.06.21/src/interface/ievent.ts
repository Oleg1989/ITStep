import { IObserver } from "./iobserver";

export interface IEvent {
    trigger(): void;
    subscribe(observer: IObserver): void;
}