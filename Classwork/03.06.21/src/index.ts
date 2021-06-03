import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min';
import { UsersUpdatedEvent } from "./userUpdatedEvent";
import { UserList } from "./userList";
import { UsersView } from "./users.View";


const userUpdatedEvent = new UsersUpdatedEvent();

const userList = new UserList(userUpdatedEvent);

const userView = new UsersView(userList, userUpdatedEvent);

// userList.add(user1);
// userList.add(user2);
//userList.add(new User('User3', 'LastName3', 'nickname3'));