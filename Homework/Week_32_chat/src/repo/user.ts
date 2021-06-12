export class User {
    private _userId: string;
    private _nickname: string;

    constructor(userId: string, nickname: string) {
        this._userId = userId;
        this._nickname = nickname;
    }
    get name(): string {
        return `${this._nickname}`;
    }
    set name(name: string) {
        this._nickname = name;
    }
    get id(): string {
        return `${this._userId}`;
    }
}