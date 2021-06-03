export class User {
    private _userId: string;
    private _nickname: string;

    constructor(userId: string, nickname: string) {
        this._userId = userId;
        this._nickname = nickname;
    }
    get name(): string {
        return `${this._userId} - ${this._nickname}`;
    }
}