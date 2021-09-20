import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectChatTotalUsers,
    selectChatTotalAnonymous,
    selectChatRegisteredUsers,
    selectChatRoomActive,
    selectChatUsersRoom
} from './chatSlice';
import { ItemUser } from './ItemUser';

export function Users() {
    const registeredUsers = useSelector(selectChatRegisteredUsers);
    const usersRoom = useSelector(selectChatUsersRoom);
    const totalUsers = useSelector(selectChatTotalUsers);
    const totalAnonymous = useSelector(selectChatTotalAnonymous);
    const roomActive = useSelector(selectChatRoomActive);

    const liItems = null;

    const itemUsers = (liItems) => {
        if (roomActive) {
            usersRoom.forEach((room) => {
                if (room.id === roomActive.id) {
                    return liItems = room.users.map((user) => <ItemUser user={user.nick} key={user.id}></ItemUser>);
                }
            });
        } else {
            return liItems = registeredUsers.map((user, index) => <ItemUser user={user.nick} key={index}></ItemUser>);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <h6 className="header center-align"><span className="teal-text"
                                id="users">Users</span></h6>
                            <ul className="collection">
                                {itemUsers(liItems)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <hr />
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <ul className="collection" id='anonym'>
                                <li className="collection-item" >Anonymous - {totalAnonymous}</li>
                                <li className="collection-item" >Total online - {totalUsers}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}