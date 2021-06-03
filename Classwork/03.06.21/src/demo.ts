interface IObserver {
    notify(): void;
}

interface IEvent {
    trigger(): void;
    subscribe(observer: IObserver): void;
}

// class User {
//     private _firstName: string;
//     private _lastName: string;
//     private _nickname: string;

//     constructor(firstName: string, lastName: string, nickname: string) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._nickname = nickname;
//     }
//     get name(): string {
//         return `${this._firstName} "${this._nickname}" ${this._nickname}`;
//     }
// }

// class UsersUpdatedEvent implements IEvent {
//     private _subscribers = [];
//     trigger() {
//         this._subscribers.forEach(s => s.notify());
//     }
//     subscribe(observer: IObserver) {
//         this._subscribers.push(observer);
//     }
// }
// class UserList {
//     private _userList = [];
//     private _usersUpdatedEvent: UsersUpdatedEvent;
//     constructor(userUpdatedEvent: UsersUpdatedEvent) {
//         this._usersUpdatedEvent = userUpdatedEvent;
//     }
//     add(newUser: User) {
//         this._userList.push(newUser);
//         this._usersUpdatedEvent.trigger();
//     }
//     get users(): User[] {
//         return [...this._userList];
//     }
// }

// class UsersView implements IObserver {
//     private _usersList: UserList;
//     constructor(userList: UserList, userUpdatedEvent: UsersUpdatedEvent) {
//         this._usersList = userList;
//         userUpdatedEvent.subscribe(this);
//     }
//     render() {
//         this._usersList.users.forEach(user => console.log(user.name));
//     }
//     notify() {
//         this.render();
//     }
// }

// let user1 = new User('User1', 'LastName1', 'nickname1');
// let user2 = new User('User2', 'LastName2', 'nickname2');

// const userUpdatedEvent = new UsersUpdatedEvent();

// const userList = new UserList(userUpdatedEvent);

// userList.add(user1);
// userList.add(user2);

// const userView = new UsersView(userList, userUpdatedEvent);

// userList.add(new User('User3', 'LastName3', 'nickname3'));