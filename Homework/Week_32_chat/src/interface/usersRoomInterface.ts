import { User } from "../repo/user";

export interface UsersRoomInterface {
    id: string;
    users: User[];
}