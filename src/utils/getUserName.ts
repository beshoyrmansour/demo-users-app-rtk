import { User } from "../app/models/users/user";

export const getUserName = (owner: User) => {
    return `${owner.firstName} ${owner.lastName}`
};